# Sanity API Guide for Next.js Integration

## 🎯 **Your Sanity Project Details**

- **Project ID**: `rl2j4kml`
- **Dataset**: `production`
- **API Version**: `2024-01-01` (current)

## 🔗 **API URLs**

### **1. GROQ Query API (Recommended)**
```
https://rl2j4kml.api.sanity.io/v2024-01-01/data/query/production
```

### **2. GraphQL API**
```
https://rl2j4kml.api.sanity.io/v2024-01-01/graphql/production/default
```

### **3. Real-time API (for live updates)**
```
wss://rl2j4kml.api.sanity.io/v2024-01-01/realtime/production
```

## 🚀 **Next.js Setup**

### **1. Install Sanity Client**
```bash
npm install @sanity/client
# or
yarn add @sanity/client
```

### **2. Create Sanity Client Configuration**
Create `lib/sanity.js` in your Next.js project:

```javascript
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'rl2j4kml',
  dataset: 'production',
  apiVersion: '2024-01-01', // Use current date
  useCdn: true, // Set to false for real-time data
  token: process.env.SANITY_TOKEN, // Optional: for private content
})
```

### **3. Environment Variables**
Add to your `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=rl2j4kml
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_TOKEN=your_token_here  # Optional: for private content
```

## 📊 **Query Examples**

### **1. Fetch Homepage Data**
```javascript
// lib/queries.js
export const homepageQuery = `
  *[_type == "homePage"][0] {
    seo,
    hero,
    about,
    services,
    doctors {
      title,
      subtitle,
      featuredDoctors[]-> {
        name,
        title,
        credentials,
        photo,
        slug
      },
      ctaButton
    },
    testimonials,
    contact,
    footer
  }
`

// pages/index.js or app/page.js
import { client } from '../lib/sanity'
import { homepageQuery } from '../lib/queries'

export async function getStaticProps() {
  const homepage = await client.fetch(homepageQuery)
  
  return {
    props: {
      homepage
    },
    revalidate: 60 // Revalidate every 60 seconds
  }
}
```

### **2. Fetch All Doctors**
```javascript
export const doctorsQuery = `
  *[_type == "doctor"] {
    _id,
    name,
    title,
    credentials,
    specialties,
    photo,
    bio,
    experience,
    languages,
    availability,
    contactInfo,
    appointmentLink,
    slug
  }
`
```

### **3. Fetch Single Doctor**
```javascript
export const doctorQuery = `
  *[_type == "doctor" && slug.current == $slug][0] {
    _id,
    name,
    title,
    credentials,
    specialties,
    photo,
    bio,
    education,
    experience,
    languages,
    availability,
    contactInfo,
    appointmentLink
  }
`
```

## 🎨 **React Components Example**

### **Homepage Component**
```jsx
// components/Homepage.js
export default function Homepage({ homepage }) {
  const { hero, about, services, doctors, testimonials, contact } = homepage

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>{hero.headline}</h1>
        <p>{hero.subheadline}</p>
        <a href={hero.ctaButton.link}>
          {hero.ctaButton.text}
        </a>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>{about.title}</h2>
        <div className="stats">
          {about.stats.map((stat, index) => (
            <div key={index}>
              <span>{stat.number}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>{services.title}</h2>
        <div className="services-grid">
          {services.servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors">
        <h2>{doctors.title}</h2>
        <div className="doctors-grid">
          {doctors.featuredDoctors.map((doctor) => (
            <div key={doctor._id} className="doctor-card">
              <img src={doctor.photo} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>{doctor.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

## 🔐 **Authentication & Tokens**

### **Public Content (No Token Required)**
- Homepage content
- Doctor profiles
- Services information
- Testimonials

### **Private Content (Token Required)**
- Draft content
- User-specific data
- Admin-only content

### **Get API Token**
1. Go to [Sanity Manage](https://www.sanity.io/manage/rl2j4kml/api/tokens)
2. Click "Add API token"
3. Select permissions:
   - **Viewer**: Read-only access
   - **Editor**: Read and write access
   - **Admin**: Full access

## 📱 **Real-time Updates**

### **Using Real-time API**
```javascript
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rl2j4kml',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Important for real-time
})

// Subscribe to changes
const subscription = client.listen('*[_type == "homePage"]')
  .subscribe(update => {
    console.log('Homepage updated:', update)
    // Update your UI here
  })
```

## 🚀 **Deploy to Production**

### **1. Deploy Sanity Studio**
```bash
npm run deploy
```

### **2. Deploy GraphQL API (Optional)**
```bash
npm run deploy-graphql
```

### **3. Environment Variables for Production**
```env
# Production
NEXT_PUBLIC_SANITY_PROJECT_ID=rl2j4kml
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_TOKEN=your_production_token
```

## 📋 **Available Content Types**

### **Homepage (`homePage`)**
- SEO metadata
- Hero section
- About section with stats
- Services list
- Featured doctors
- Testimonials
- Contact information
- Footer

### **Doctor (`doctor`)**
- Personal information
- Professional details
- Education history
- Contact information
- Appointment booking

## 🚨 **Troubleshooting**

### **403 Forbidden Error**

**Problem**: You're getting a 403 Forbidden error when trying to access the API.

**Cause**: This happens when you try to access the Sanity API directly via URL instead of using the Sanity client.

**Solution**: Always use the Sanity client to fetch data:

```javascript
// ❌ WRONG - Direct URL access
fetch('https://rl2j4kml.api.sanity.io/v2024-01-01/data/query/production?query=...')

// ✅ CORRECT - Using Sanity client
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rl2j4kml',
  dataset: 'production',
  apiVersion: '2024-01-01',
})

const data = await client.fetch('*[_type == "homePage"][0]')
```

### **Common Issues & Solutions**

#### **1. CORS Errors**
```javascript
// Make sure you're using the client, not direct fetch
const client = createClient({
  projectId: 'rl2j4kml',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for better performance
})
```

#### **2. Authentication Errors**
```javascript
// For private content, add a token
const client = createClient({
  projectId: 'rl2j4kml',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN, // Add this for private content
})
```

#### **3. Query Errors**
```javascript
// Make sure your query matches your schema structure
const query = `
  *[_type == "homePage"][0] {
    seo,
    hero {
      headline,
      subheadline,
      ctaButton
    },
    about {
      title,
      content,
      stats
    }
  }
`
```

### **Debugging Steps**

1. **Check your schema structure** matches your query
2. **Verify project ID and dataset** are correct
3. **Use Sanity client** instead of direct API calls
4. **Check environment variables** are set correctly
5. **Test with a simple query first**

### **Working Example**
```javascript
// lib/sanity.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'rl2j4kml',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// lib/queries.js
export const homepageQuery = `
  *[_type == "homePage"][0] {
    seo,
    hero,
    about,
    services,
    doctors,
    testimonials,
    contact,
    footer
  }
`

// pages/index.js
import { client } from '../lib/sanity'
import { homepageQuery } from '../lib/queries'

export async function getStaticProps() {
  try {
    const homepage = await client.fetch(homepageQuery)
    console.log('Homepage data:', homepage) // Debug log
    
    return {
      props: {
        homepage: homepage || null
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Error fetching homepage:', error)
    return {
      props: {
        homepage: null
      },
      revalidate: 60
    }
  }
}
```

## 🔗 **Useful Links**

- [Sanity API Documentation](https://www.sanity.io/docs/js-client)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [GraphQL API](https://www.sanity.io/docs/graphql)
- [Real-time API](https://www.sanity.io/docs/realtime)
- [Next.js Integration Guide](https://www.sanity.io/docs/nextjs)

## 🎯 **Quick Start Checklist**

- [ ] Install `@sanity/client` in Next.js project
- [ ] Create Sanity client configuration
- [ ] Set up environment variables
- [ ] Create query functions
- [ ] Build React components
- [ ] Test data fetching
- [ ] Deploy to production

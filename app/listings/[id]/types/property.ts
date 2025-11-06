// types/property.ts
export interface Room {
    name: string
    description: string
    image: string
  }
  
  export interface Property {
    id: number
    title: string
    price: number
    location: string
    beds: number
    baths: number
    sqft: number
    image: string
    category: string
    featured: boolean
    description: string
    yearBuilt: number
    parking: number
    rooms: Room[]
    agent: {
      name: string
      phone: string
      email: string
      image: string
    }
  }
import headphones from './products/headphones.json'
import pocket from './products/pocket-operator.json'
import cable from './products/cable.json'
import ob4 from './products/ob4.json'
import od11 from './products/od11.json'
import op1 from './products/op1.json'
import post from './posts/post.json'
import lipsum from './lipsum.json'
import { faker } from '@faker-js/faker'

export interface Product {
  slug: string
  title: string
  price: number
  excerpt: string
  facts?: string[] | null
  image: string
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  author: Author
  content: string[]
}
export interface Author {
  name: string
  picture: string
}

export const products: Product[] = [headphones, pocket, ob4, od11, op1, cable]
export const posts: Post[] = [...Array(5)].map(_ => ({
  slug: faker.lorem.slug(),
  title: faker.lorem.sentence(),
  excerpt: faker.lorem.sentence(),
  image: faker.image.imageUrl(),
  date: faker.date.past().toISOString(),
  author: {
    name: faker.name.findName(),
    picture: faker.image.avatar(),
  },
  content: [...Array(Math.floor(Math.random() * 10) + 2)].map(_ => faker.lorem.paragraph()),
}))

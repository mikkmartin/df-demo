import headphones from './products/headphones.json'
import pocket from './products/pocket-operator.json'
import cable from './products/cable.json'
import ob4 from './products/ob4.json'
import od11 from './products/od11.json'
import op1 from './products/op1.json'
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
export const posts: Post[] = [
  'Favorite mixes of 2021',
  'Violet finds inspiration in the mundane on new album, Transparências',
  'Dance Floor Epiphanies: Love in the Club',
  "Rave in a cave",
].map(title => ({
  slug: faker.lorem.slug(),
  title,
  excerpt: faker.lorem.sentence(),
  image: faker.image.imageUrl(),
  date: faker.date.past().toISOString(),
  author: {
    name: faker.name.findName(),
    picture: faker.image.avatar(),
  },
  content: [...Array(Math.floor(Math.random() * 10) + 2)].map(_ => faker.lorem.paragraph()),
}))

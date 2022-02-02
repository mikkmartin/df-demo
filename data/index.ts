import headphones from './products/headphones.json'
import pocket from './products/pocket-operator.json'
import post from './posts/post.json'

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
}
export interface Author {
  name: string
  picture: string
}

export const products: Product[] = [headphones, pocket]
export const posts: Post[] = [post]

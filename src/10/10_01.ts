export type UserType = {
  name: string
  hair: number
  address: { city: string, house?: number }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBooks = UserType & {
  books: Array<string>
}

export type CompanyType2 = {id: number, title: string }

export type CompanyType = {
  companies: Array<{ id: number, title: string }>
}

export function makeHairstyle(u: UserType, power: number) {
  return {...u, hair: u.hair / power}
}

export const moveUser = (u: UserWithLaptopType, city: string, house: number) => {
  return {
    ...u, address: {...u.address, city, house}
  }
}

export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
  return {
    ...u, laptop: {...u.laptop, title: laptop}
  }
}

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooks, house: number) => {
  return {
    ...u, address: {...u.address, house}
  }
}

export const addNewBookToUser = (u: UserWithLaptopType & UserWithBooks, newBooks: Array<string>) => {
  return {...u, books: [...u.books, ...newBooks]}
}

export const updateBook = (u: UserWithLaptopType & UserWithBooks, oldBook: string, newBook: string) => {
  return {...u, books: u.books.map(el => el === oldBook ? newBook : el)}
}

export const removeBook = (u: UserWithLaptopType & UserWithBooks, oldBook: string) => {
  return {...u, books: u.books.filter(el => el !== oldBook)}
}

export const updateCompany = (u: CompanyType, newCompany: string) => {
  return {...u, companies: u.companies.map(el => el.title === "Google"? {...el, title: newCompany} : el)}
}

export const updateCompany2 = (companies: { [key: string]: Array<CompanyType2> },
                              userName: string,
                              companyID: number,
                              newTitle: string) => {

  let companyCopy = {...companies}

  companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)

  return companyCopy
}

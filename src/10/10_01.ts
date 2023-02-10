export type UserType = {
  name: string
  hair: number
  address: {city: string, house?: number}
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}


export function makeHairstyle(u: UserType, power: number) {
  return {...u, hair: u.hair/ power}
}

export const moveUser = (u: UserWithLaptopType, city: string, house: number) => {
  return {
    ...u, address: {...u.address, city, house}
  }
}
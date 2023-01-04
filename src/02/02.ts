type LocalCityType = {
  title: string
  countryTitle: string
}

type AddressType = {
  streetTitle: string
  city: LocalCityType
}

type TechType = {
  id: number
  title: string
}

export type StudentType ={
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
}

export const student: StudentType = {
  id: 1,
  name: "DimOk",
  age: 36,
  isActive: false,
  address: {
    streetTitle: "Savushkina 120",
    city: {
      title: "St.Petersburg",
      countryTitle: "Russia"
    }
  },
  technologies: [
    {
      id: 1,
      title: "HTML"
    },
    {
      id: 2,
      title: "CSS"
    },
    {
      id: 3,
      title: "JS"
    }
  ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)


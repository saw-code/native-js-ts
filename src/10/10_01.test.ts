import {
  addNewBookToUser,
  makeHairstyle,
  moveUser,
  moveUserToOtherHouse, removeBook, updateBook, updateCompany,
  upgradeUserLaptop,
  UserType,
  UserWithBooks,
  UserWithLaptopType, CompanyType, updateCompany2
} from "./10_01";



test("reference type test", () => {
  let user: UserType = {
    name: "DimOk",
    hair: 36,
    address: {
      city: "Minsk"
    }
  }

  const awesomeUser = makeHairstyle(user, 2)

  expect(awesomeUser.hair).toBe(18)
  expect(user.hair).toBe(36)
  expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
  let user2: UserWithLaptopType = {
    name: "DimOk",
    hair: 36,
    address: {
      city: "Minsk",
      house: 5
    },
    laptop: {
      title: "ZenBook"
    }
  }

  const copyUser = moveUser(user2, "Kiev", 13)

  expect(copyUser).not.toBe(user2)
  expect(copyUser.laptop).toBe(user2.laptop)
  expect(copyUser.address.city).toBe("Kiev")
  expect(user2.address.city).toBe("Minsk")
})

test("change laptop to macBook", () => {
  let user2: UserWithLaptopType = {
    name: "DimOk",
    hair: 36,
    address: {
      city: "Minsk",
      house: 5
    },
    laptop: {
      title: "ZenBook"
    }
  }

  const copyUser = upgradeUserLaptop(user2, "macBook")

  expect(copyUser).not.toBe(user2)
  expect(copyUser.laptop).not.toBe(user2.laptop)
  expect(user2.address.city).toBe("Minsk")
  expect(user2.laptop.title).not.toBe(copyUser.laptop.title)
  expect(user2.laptop.title).toBe("ZenBook")
  expect(copyUser.laptop.title).toBe("macBook")
})

test("change User house", () => {
  let user2: UserWithLaptopType & UserWithBooks = {
    name: "DimOk",
    hair: 36,
    address: {
      city: "Minsk",
      house: 5
    },
    laptop: {
      title: "ZenBook"
    },
    books: ["css", "html", "js", "react"]
  }

  const copyUser = moveUserToOtherHouse(user2, 99)

  expect(copyUser).not.toBe(user2)
  expect(copyUser.laptop).toBe(user2.laptop)
  expect(user2.address.city).toBe("Minsk")
  expect(copyUser.address.house).toBe(99)
  expect(user2.books).toBe(copyUser.books)
  expect(user2.laptop.title).toBe("ZenBook")
})

test("add new book to User", () => {
  let user2: UserWithLaptopType & UserWithBooks = {
    name: "DimOk",
    hair: 36,
    address: {
      city: "Minsk",
      house: 5
    },
    laptop: {
      title: "ZenBook"
    },
    books: ["css", "html", "js", "react"]
  }

  const copyUser = addNewBookToUser(user2, ["ts", "rest api"])

  expect(copyUser).not.toBe(user2)
  expect(copyUser.laptop).toBe(user2.laptop)
  expect(user2.address).toBe(copyUser.address)
  expect(user2.books).not.toBe(copyUser.books)
  expect(user2.laptop.title).toBe("ZenBook")
  expect(copyUser.books[4]).toBe("ts")
  expect(copyUser.books[5]).toBe("rest api")
})

test("update js to ts", () => {
  let user2: UserWithLaptopType & UserWithBooks = {
    name: "DimOk",
    hair: 36,
    address: {
      city: "Minsk",
      house: 5
    },
    laptop: {
      title: "ZenBook"
    },
    books: ["css", "html", "js", "react"]
  }

  const copyUser = updateBook(user2, "js", "ts")

  expect(copyUser.books[2]).toBe("ts")
  expect(copyUser).not.toBe(user2)
  expect(copyUser.laptop).toBe(user2.laptop)
  expect(user2.address).toBe(copyUser.address)
})

test("remove js book", () => {
  let user2: UserWithLaptopType & UserWithBooks = {
    name: "DimOk",
    hair: 36,
    address: {
      city: "Minsk",
      house: 5
    },
    laptop: {
      title: "ZenBook"
    },
    books: ["css", "html", "js", "react"]
  }

  const copyUser = removeBook(user2, "js", )

  expect(copyUser.books[2]).toBe("react")
  expect(copyUser).not.toBe(user2)
  expect(copyUser.laptop).toBe(user2.laptop)
  expect(user2.address).toBe(copyUser.address)
})

test("update companies", () => {
  let user2: UserWithLaptopType & CompanyType = {
    name: "DimOk",
    hair: 36,
    address: {
      city: "Minsk",
      house: 5
    },
    laptop: {
      title: "ZenBook"
    },
    companies: [
      {id: 1, title: "Google"},
      {id: 2, title: "Apple"}
    ]
  }

  const copyUser = updateCompany(user2, "Tesla" )

  expect(copyUser.companies[0].title).toBe("Tesla")
})

test("update company", () => {

  let companies = {
    "DimOk": [{id: 1, title: "Google"}, {id: 2, title: "Apple"}],
    "Peppito": [{id: 2, title: "Apple"}]
  }

  const copyUser = updateCompany2(companies, "DimOk", 1, "IKPK" )

  expect(copyUser["DimOk"]).not.toBe(companies["DimOk"])
  expect(copyUser["Peppito"]).toBe(companies["Peppito"])
  expect(copyUser["DimOk"][0].title).toBe("IKPK")
})

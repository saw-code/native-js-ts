import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from "./10_01";



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
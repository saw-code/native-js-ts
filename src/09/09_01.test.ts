import * as string_decoder from "string_decoder";

function icreaseAge(u: UserType) {
  u.age++
}

type UserType = {
  name: string
  age: number
  address: { title: string }
}


test('reference type test', () => {

  let user: UserType = {
    name: "DimOk",
    age: 36,
    address: {
      title: "Moscow"
    }
  }

  icreaseAge(user)

  expect(user.age).toBe(37)

  const superman = user
  superman.age = 1000

  expect(user.age).toBe(1000)
})

test('array reference test', () => {

  let users = [

    {
      name: "DimOk",
      age: 36,
    },
    {
      name: "Peppa",
      age: 34
    }
  ]

  let admins = users
  admins.push({name: 'Bandyga', age: 10})

  expect(users[2].age).toBe(10)
  expect(users[2]).toEqual({name: 'Bandyga', age: 10})
})

test('value type test', () => {

  let usersCount = 100
  let adminsCount = usersCount

  expect(usersCount).toBe(100)
  expect(adminsCount).toBe(usersCount)
})

test('reference object type test', () => {

  let address = {
    title: "Minsk"
  }

  let user: UserType = {
    name: "DimOk",
    age: 36,
    address: address
  }

  let user2: UserType = {
    name: "Vika",
    age: 39,
    address: address
  }

  user2.address.title = "Kanada"

  // let addr = user.address

  expect(user.address).toBe(user2.address)
  expect(user.address.title).toBe("Kanada")
})

test('reference array type test', () => {

  let address = {
    title: "Minsk"
  }

  let user: UserType = {
    name: "DimOk",
    age: 36,
    address: address
  }

  let user2: UserType = {
    name: "Vika",
    age: 39,
    address: address
  }

  const users = [user, user2, {name: "Oleg", age: 18, address: address}]
  const admins = [user, user2]

  admins[0].name = "Dmitry"

  expect(users[0].name).toBe("Dmitry")
  expect(user.name).toBe("Dmitry")
  expect(user.address).toBe(user2.address)
  expect(user.address.title).toBe("Minsk")
})

test('sort array test', () => {

  const letters = ["c", "d", "a", "z", "e"]
  letters.sort()
  expect(letters).toEqual( ["a", "c", "d", "e", "z"])
})

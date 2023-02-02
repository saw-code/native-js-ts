import {ManType} from "./Destructuring";

let props: ManType

beforeEach(() => {
  props = {
    name: "DimOk",
    age: 32,
    lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
    address: {
      street: {
        title: "Nezavisimosti street"
      }
    }
  }
})


test("1", () => {
  // const age = props.age
  // const lessons = props.lessons
  const {age, lessons} = props // то же самое что и в строке 20 и 21
  // const {age: a, lessons: l} = props // то же самое что и в строке 22
  // только присвоили псевдоним a и l вместо age и lessons
  const {title} = props.address.street
  // const title = props.address.street.title // то же самое что в 25

  expect(age).toBe(32)
  expect(lessons.length).toBe(3)
  expect(title).toBe("Nezavisimosti street")
})


test("2", () => {
  const l1 = props.lessons[0]
  const l2 = props.lessons[1]

  const [ls1, ls2] = props.lessons

  const [ggg, ...restLessons] = props.lessons

  expect(l1.title).toBe("1")
  expect(l2.title).toBe("2")

  expect(ls1.title).toBe("1")
  expect(ls2.title).toBe("2")

  expect(restLessons.length).toBe(2)
  expect(restLessons[0].title).toBe("2")
})

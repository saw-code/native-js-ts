import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
  return a + b
}

export function sum2(a: number, b: number) {
  return a + b
}


export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export function addSkill2(student: StudentType, skill: string) {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export function makeStudentActive(s: StudentType) {
  s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, city: string) => {
  return s.address.city.title === city;
}

export function addMoneyToBudget(building: GovernmentBuildingType, budget: number) {
  building.budget += budget
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
  building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
  building.staffCount += staffCountToHire
}

export function createMessage(props: CityType) {
  return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`
}
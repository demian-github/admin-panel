import faker from 'faker'
import { nanoid } from '@reduxjs/toolkit'

const ORDERD_COUNT = 200

faker.locale = 'ru'

function generateOrder () {
  const order = {
    id: nanoid(),
    number: faker.datatype.number({
      min: 1000000,
      max: 9999999
    }),
    date: faker.date.between('2019-01-01', '2022-01-01').toLocaleString(),
    status: faker.datatype.number({
      min: 1,
      max: 6
    }),
    positions: faker.datatype.number({
      min: 0,
      max: 10
    }),
    summa: faker.datatype.number({
      min: 1,
      max: 9999999999
    }),
    fio: `${faker.name.lastName()} ${faker.name.firstName()} ${faker.name.middleName()}`,
    privilage: faker.random.arrayElement([
      'Новый',
      'Сильвер',
      'Голд'
    ]),
    orderItem: []
  }
  generateOrderData(order)
  return order
}

function generateOrderData (order) {
  let itemsSum = 0
  for (let counter = 0; counter < order.positions; counter++) {
    const orderItem = {
      id: nanoid(),
      orderID: order.ID,
      article: faker.datatype.string(2) + '.' + faker.datatype.number(),
      name: faker.commerce.productName(),
      price: faker.datatype.number({
        min: 1000,
        max: 100000
      })
    }
    if (counter === order.itemsCount - 1) {
      orderItem.price = order.sum - itemsSum
    }
    itemsSum += itemsSum + orderItem.price
    order.orderItem.push(orderItem)
  }
}

const orderList = []

function cloneOrderArray (sourceArray) {
  return sourceArray.map((data) => ({ ...data }))
}

function generateOrderList () {
  if (orderList.length > 0) {
    return cloneOrderArray(orderList)
  }
  for (let counter = 0; counter < ORDERD_COUNT; counter++) {
    orderList.push(generateOrder())
  }
  return cloneOrderArray(orderList)
}

export const orders = () => generateOrderList()

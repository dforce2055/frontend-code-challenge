import { describe, it, expect } from 'vitest'
import { isAnImage, convertStringToObject, getActivitiesObject } from '.'

describe('utils: isAnImage', () => {
  it('should return if url contain an Image', () => {
    expect(isAnImage('https://example.com/image.png')).toEqual(true)
    expect(isAnImage('https://example.com/image.jpg')).toEqual(true)
    expect(isAnImage('https://example.com/image.jpeg')).toEqual(true)
    expect(isAnImage('https://example.com/image.gif')).toEqual(true)
    expect(isAnImage('https://example.com/image.svg')).toEqual(true)
    expect(isAnImage('https://example.com/image.webp')).toEqual(true)
    expect(isAnImage('https://example.com/image')).toEqual(false)
    expect(isAnImage('https://example.com/image.json')).toEqual(false)
  })
})
describe('utils: convertStringToObject', () => {
  it('should convert a valid string to an object', () => {
    const str = '{"name": "John", "age": 30}'
    expect(convertStringToObject(str)).toEqual({ name: 'John', age: 30 })
  })

  it('should return an empty object if the string is empty', () => {
    const str = ''
    expect(convertStringToObject(str)).toEqual({})
  })
})

describe('utils: getActivitiesObject', () => {
  it('should convert a valid string to an ActivityDetails object', () => {
    const activity = '{"name": "Running", "duration": 60}'
    expect(getActivitiesObject(activity)).toEqual({ name: 'Running', duration: 60 })
  })

  it('should return an empty object if the string is empty', () => {
    const activity = ''
    expect(getActivitiesObject(activity)).toEqual({})
  })
})

describe('utils: isAnImage', () => {
  it('should return true for valid image URLs', () => {
    expect(isAnImage('https://example.com/image.png')).toEqual(true)
    expect(isAnImage('https://example.com/image.jpg')).toEqual(true)
    expect(isAnImage('https://example.com/image.jpeg')).toEqual(true)
    expect(isAnImage('https://example.com/image.gif')).toEqual(true)
    expect(isAnImage('https://example.com/image.svg')).toEqual(true)
    expect(isAnImage('https://example.com/image.webp')).toEqual(true)
  })

  it('should return false for non-image URLs', () => {
    expect(isAnImage('https://example.com/image')).toEqual(false)
    expect(isAnImage('https://example.com/image.json')).toEqual(false)
  })

  it('should return false for empty URLs', () => {
    expect(isAnImage()).toEqual(false)
  })
})

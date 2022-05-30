const id = (parent) => parent.id
const email = (parent) => parent.email
const fullName = (parent) => `${parent.firstName} ${parent.lastName}`

module.exports = {
  id, 
  email,
  fullName
}
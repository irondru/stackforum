const profile = {
  image: []
}

export const createProfile = props => ({
  ...profile,
  ...props
})

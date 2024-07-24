interface UserInfo {
  email: string,
  gender: string,
  nat: string,
  name: {
    first: string,
    last: string,
    title: string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
}

interface UserInfoList {
  results: Array<UserInfo>
}

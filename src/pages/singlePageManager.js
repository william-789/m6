import generateHome from "./home.js";
import searchPage from "./search.js";
import tickets from "./tickets.js";
import userProfile from "./user.js";
class SinglePageManager {
  constructor() {
  }
  home() {
    return generateHome();
  }

  search() {
    return searchPage();
  }

  ticket() {
    return tickets();
  }

  user() {
    return userProfile();
  }
}
export default SinglePageManager;
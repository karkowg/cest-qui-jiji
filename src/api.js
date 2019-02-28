import ky from "ky";

const api = ky.extend({
  prefixUrl: "https://cest-qui-jiji-bot.now.sh"
});

export function fetchListings() {
  return api.get("listings");
}

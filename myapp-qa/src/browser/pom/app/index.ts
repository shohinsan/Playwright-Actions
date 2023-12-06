import { homeFunction } from './page'
import { ErrorPage as error } from '@app/error'
import { aboutFunction } from './about/page'
import { logoutFunction } from './logout/page'
import { pricingFunction } from './pricing/page'
import { rssFunction } from './blog/rss.xml/page'
import { slugFunction } from './blog/[slug]/page'
import { blogFunction } from './blog/page'
import { scrapeFunction } from './scrape/page'
import { userFunction } from './scrape/[user]/page'

export const app = {
	home: homeFunction,
	about: aboutFunction,
	logout: logoutFunction,
	pricing: pricingFunction,
	blogs: {
		slug: slugFunction,
		rss: rssFunction,
		blog: blogFunction,
	},
	scrapes: {
		scrape: scrapeFunction,
		user: userFunction,
	}
};

export {
	error
}

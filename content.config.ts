import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'data',
            source: 'pages/**.json',
            schema: z.object({
                site_title: z.string(),
                site_subtitle: z.string(),
                discord_link: z.string(),
                facebook_link: z.string(),
                instagram_link: z.string(),
                address: z.string(),
                intro_content: z.array(
                    z.object({
                        text_row: z.string(),
                    })
                ),
                main_content: z.array(
                    z.object({
                        text_row: z.string(),
                    })
                ),
                opening_times: z.string(),
                registration: z.string(),
                page_title: z.string(),
                button_text: z.string(),
                clauses: z.array(
                    z.object({
                        clause_title: z.string(),
                        clause_content: z.string(),
                        clause_email: z.string()
                    })
                ),
            })
        }),
        components: defineCollection({
            type: 'data',
            source: 'components/**.json',
            schema: z.object({
                title: z.string(),
                footer_email: z.string(),
                footer_address: z.string(),
                footer_org: z.string(),
                copyright: z.string(),
                footerButton: z.string(),
            })
        }),
        pagesMd: defineCollection({
            type: 'page',
            source: 'pages/**.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                headline: z.string(),
                excerpt: z.string(),
                date: z.string(),
                dateUpdated: z.string(),
                author: z.string(),
            })
          })
    }
})

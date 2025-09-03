import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const banner = <Banner storageKey="some-key">The APB Method Website is released!! 🎉</Banner>
const navbar = (
  <Navbar
    logo={<><img src='/images/apb_icon.png' alt='Icon of the APB Method' width={40} height={40}></img><b>APB Method</b></>}
    projectLink='https://github.com/phalentin/apbmethod.net/'
  />
)
const footer = <Footer><p>Made with ♥️ by <a href="https://www.youtube.com/@justenoughalgorithms" target="_blank"><strong>JustEnoughAlgorithms</strong></a>.</p></Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      children={<script src="https://cdn.cubing.net/v0/js/cubing/twisty" type="module"></script>}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/phalentin/apbmethod.net/tree/main/"
          footer={footer}
          banner={banner}
          
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
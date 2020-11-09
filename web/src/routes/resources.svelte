<script context="module">
        import client from '../sanityClient'
      
        export function preload({ params }) {
          const filter = `*[_type == 'resources'][0]`
          const projection = `{
                ...,
              }`
      
          const query = filter + projection
      
          return client
            .fetch(query)
            .then((resources) => {
              return { resources }
            })
            .catch((err) => this.error(500, err))
        }
      </script>

<script>
        export let resources
        console.log(resources)
</script>

<style>
        h2 {
                font-size: 2rem;
                margin-top: 1rem;
        }
</style>

<article id="resources" class="about-article container">
        <h2>Resources</h2>
        <ul>
                <li><a href="https://www.fractracker.org/map/us/west-virginia/">FracTrackers West Virginia Home Page</a>
                </li>
                <li><a
                        href="https://maps.fractracker.org/latest/?appid=0e1c78c02993421d9e1920ce28737f61&webmap=c642c5c97cfa4634b7e42d42b32d1d74 ">FracTrackers
                        West Virginia Oil and Gas Map</a></li>
                <li><a href="http://ft.maps.arcgis.com/apps/View/index.html?appid=e21ee20c94e249b39e170db4d8716ffb">West
                        Virginia Oil, Gas and Coal Production Map</a></li>
                <li><a href="https://www.wvminewars.com/teacher-resources ">Radical History (minus the whitewashing)
                        Resources via the West Virginia Mine Wars Museum</a></li>
                <li><a href="https://www.blair100.com/">Blair Mountain Centennial</a></li>
                <li><a href="https://ohvec.org/larry-gibsons-fight/ ">Keepers of the Mountain - the Story of Larry
                        Gibson & Kayford Mountain</a></li>
                <li><a
                        href="https://inthesetimes.com/ittlist/entry/13811/rip_larry_gibson_anti-mtr_activist_and_man_of_kayford_mountain">Overview
                        of Larry Gibson's work and impact</a></li>
        </ul>
</article>
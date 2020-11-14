<script context="module">
    import client from '../sanityClient'
    export function preload() {
      const synopsis = `*[_type == 'post' && title == 'Synopsis'][0]{
            title,
            body[]{
                ...,
                children[]{
                ...
                }
            }
          }`
  
      const query = `{
          "synopsis": ${synopsis},
      }`
      return client
        .fetch(query)
        .then((data) => {
          return { data }
        })
        .catch((err) => this.error(500, err))
    }
  </script>

<script>
    import BlockContent from '@movingbrands/svelte-portable-text'
    import serializers from '../components/serializers'

    export let data
    console.log(data)
    const {synopsis} = data
    import Link from '../components/Link.svelte'
</script>

<style>
    article {
        margin-bottom: 4rem;
    }

    h2 {
        font-size: 2rem;
    }
    #about-the-filmmaker {
        margin-bottom: 0;
    }
</style>

<main class="container">
    <!-- <article id="synopsis" class="about-article">
        <h1 class="biggerH">Hard Road Of Hope</h1>
        <p>West Virginia...that's just like the epicenter of the opioid problem, right? And home to a bunch of
            hillbillies who vote for Trump? And the totally corrupt politicians who just let coal and gas do
            whatever the hell they want? What could you possibly have to say about West Virginia that's worth
            hearing?</p><br>
        <p>These are some of the questions I've gotten from people when I told them I'm doing a longer-form
            piece on West Virginia. Heads cocked to the side like confused dogs, they emphatically demand that
            they already know what it's about, already know the stories, the characters (whom they don't like), so
            why bother? I might as well do a piece on why slavery was bad or how the earth isn't flat.</p><br>
        <p>Ironically of course, they've answered their questions by asking them. Folks hear a lot, but they know a
            lot less. And hey, that included me too. Coal mining, then fracking, trailer parks and people with giant
            Trump flags in their yards. That's it, right? Truly, scathing headlines and punch lines about West
            Virginia are a dime a dozen. And the forgotten and isolated rednecks of West Virginia are familiar with
            this attitude. Indeed, it goes back to the very founding of the state as a throwaway resource colony.
        </p><br>
        <p>So, there you have it. This is worth hearing because few so far have bothered listening. And this failure
            not only discards people and places in a manner corporate execs would applaud, it amputates us from
            our shared history, the understanding of our present and the ability to shape the future.
            Yes, West Virginia is home to pain, suffering, oppression, corruption and bigotry – but so is the whole
            country. And more than a microcosm of our agony, West Virginia is an example of radical resolve.
            Proud rednecks, the people are still fighting and building in the hills and hollers; working to connect
            their past to a broken present and the potential future that we all share.
            It's a hard road of hope, a pot-holed and puddled path past the Kings of coal and gas, but they keep
            walking. We would do well to walk with them for a while – and listen.</p><br>
    </article> -->
    <article class="block-content">
        <h2 style="margin-top: 1rem;">{synopsis.title}</h2>
        <BlockContent blocks={synopsis.body} {serializers} />
    </article>
    <article id="cast-crew" class="about-article">
        <h2>Cast</h2>
        <h3 class="smaller-text" style="margin-top: -1rem; margin-bottom: 1.5rem;">(in order of appearance)</h3>
        <div class="list-ctn">
            <ul id="cast">
                <li><b>Paul Corbit Brown</b></li>
                <li>President and Chair, Keepers of the Mountain</li>
                <li><b>Wilma Steele</b></li>
                <li>Board Member, West Virginia Mine Wars Museum – Matewan, West Virginia</li>
                <li><b>Chad Cordell</b></li>
                <li>Coordinator, Kanawha Forest Coalition</li>
                <li><b>Terry Steele</b></li>
                <li>UMWA Local 1440 Member, Former Miner</li>
                <li><b>Linda Ireland</b></li>
                <li>Resident, Doddridge County, West Virginia</li>
                <li><b>Mirijana Beram</b></li>
                <li>Resident, Doddrige County, West Virginia</li>
                <li><b>James Beatty & Lynn Beatty</b></li>
                <li>Residents, Doddridge County, West Virginia</li>
                <li><b>Kimberly McCoy</b></li>
                <li>Docent, West Virginia Mine Wars Museum – Matewan, West Virginia</li>
                <li><b>Jen Deerinwater</b></li>
                <li>Executive Director, Crushing Colonialism</li>
            </ul>
        </div>
    </article>
    <article>
        <h2>Crew</h2>
        <div class="list-ctn">
            <ul id="crew">
                <li><i>Directed, Written and Produced by</i></li>
                <li><b id="director">Eleanor Goldfield</b></li>
                <li><i>Audio and Video Post Production by</i></li>
                <li><b>Chris Owens</b></li>
                <li><i>Original Music by</i></li>
                <li><b>Michael John Adams</b></li>
                <li><i>Photographs and video by</i></li>
                <li><b>Eleanor Goldfield</b></li>
                <li style="margin-top: -1rem; margin-bottom: -1rem;"><i>(unless otherwise noted)</i></li>
            </ul>
        </div>
    </article>
    <article id="special-thanks" class="about-article">
        <br>
        <h3 style="font-size: 1.69rem;">Special thanks</h3>
        <ul class="list-ctn">
            <li>Paul Corbit Brown</li>
            <li>Mirijana Beram</li>
            <li>Ted Auch from FracTracker</li>
            <li>SouthWings</li>
            <li>Ohio Valley Environmental Coalition</li>
            <li>West Virginia Mine Wars Museum</li>
            <li>Fellow Snapping Turtles Doon Mars and Jen Deerinwater</li>
            <li>Lee Camp</li>
            <li style="margin-top: 1rem;" class="smaller-text">And all participants who leant their time and
                expertise during these
                interviews.</li>

        </ul>

    </article>
    <article>
        <h2>Patrons</h2>
        <h3 class="smaller-text" style="margin-top: -1rem; margin-bottom: 1.5rem;">(partial list)</h3>
        <ul class="list-ctn">
            <li>David Paul</li>
            <li>Gimena Sanchez</li>
            <li>Debby Zamorski</li>
            <li>Elaine Smith</li>
            <li>Shanti Davidson</li>
            <li>At The Barricades</li>
            <li>Fred Saberian</li>
            <li>Bob Martin</li>
            <li>Bruce Hitchcock</li>
            <li>Christopher Andrews</li>
            <li>Dave C</li>
            <li>Martha Leslie Allen</li>
            <li>Paul Blair</li>
            <li>Rael Nidess</li>
            <li>Serena Bergstrom</li>
        </ul>
        <br>
        <p class="smaller-text">Our work is made possible via patrons. We have no backing from any media outlet, any
            organizations
            or any corporations. We don't do this for the money, and it takes money to get it done. Anything you
            can give to support our work is hugely appreciated and goes straight in to creating more content
            like
            this.
        </p>
    </article>
    <article style="border: 0.125rem solid #333; padding: 2rem;">
        <p class="smaller-text">
            Hard Road of Hope was filmed in, at and around Charleston, Pax, Kayford Mountain, Matewan, Clarksburg, West Union, and Parkersburg, West Virginia.
        </p>
    </article>
    <article id="about-the-filmmaker">
        <h2>About the Filmmaker</h2>
        <p>Eleanor is a creative activist and journalist. Her work has appeared on Free Speech TV where she produced
            and hosted the weekly radical news show, Act Out! for five years. Her print work has appeared via Mint
            Press News, ROAR, Popular Resistance, RT and more.</p>
        <br>
        <p>She is the host of the podcast Act Out! and the co-host of the podcast Common Censored along with Lee
            Camp.</p>
        <br>
        <p>Besides touring, performing and media work, she assists in frontline action organizing and activist
            trainings.</p>
        <br>
    </article>
    <Link href="/resources">Resources</Link>
</main>
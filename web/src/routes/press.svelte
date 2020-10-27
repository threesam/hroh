<script context="module">
    import client from '../sanityClient'
    export function preload({ params }) {
      const filter = `*[_type == 'press']|order(_createdAt desc){
            href,
            title
          }`
      const query = filter //+ projection
      return client
        .fetch(query)
        .then((press) => {
          return { press }
        })
        .catch((err) => this.error(500, err))
    }
  </script>

<script>
	import PressLink from "./_PressLink.svelte"
					
    export let press
</script>

<main class="container press-container">
    <div class="praise">
        <h2>Praise</h2>
        <div class="card">
            <p>
                "A workhorse documentary that's blue collar in presentation yet fiercely strong in its voice of
                advocacy and truth."
                <br>
                <br>
                "Hard Road of Hope doesn't speak for West Virginians but with West Virginians and, perhaps most
                refreshingly, the film avoids the histrionic stereotypes so often found in this type of film and
                instead presents West Virginians who are well informed, passionate, educated, and passionately proud
                of their West Virginia roots."
                <br>
                <br>
                "Grassroots activists, including Goldfield herself, are uniting for the sake of basic human rights
                amidst the beauty of the hills of Southern Appalachia so beautifully captured by Goldfield's lens.
                It's a beauty that remains even amidst, as Goldfield writes, "the methane-streaked highways of the
                fracking corridor" and the "decapitated peaks to the winding holler roads.""
            </p>
            <a style="display:block; margin-top: 1rem; text-decoration: underline;"
                href="https://theindependentcritic.com/hard_road_of_hope" target="_blank" rel="noopener noreferrer">
                <p class="aka" style="color: var(--main-font-col);">full review</p>
            </a>
            <p><span>- Richard Propes</span> The Independent Critic</p>
        </div>
        <div class="card">
            <p>"Hard Road of Hope explains the peoples’ history of the region through the voices of people who still
                remember...The stories in this documentary are many and watching it unravels what should be in front
                of all of our eyes in all of our struggles. Goldfield pries the viewer’s eyes open to see how the
                use of radical history is a tool we need in order to see where we come from so we can clearly see
                the now and build a just future."</p>
            <p><span>- Orin Langelle</span> co-founder Global Justice Ecology Project</p>
        </div>
        <div class="card">
            <p>"Yes, yes, yes! this is a must see film for everyone, everywhere! Eleanor Goldfield has struck that
                sweet spot between hard facts and storytelling, weaving together a powerful and inspiring story
                about land and our relationship with it-- something that is rarely achieved in documentary films.
                And, personally, nothing energizes me more to act than to have someone beautiful connect threads of
                historical resistance with today's apocalyptic times. I am energized to meet folks at the
                intersections on the hard road to hope!"</p>
            <p><span>- Carla Bergman</span> co-author Joyful Militancy, organizer, filmmaker</p>
        </div>
        <div class="card">
            <p>
                "So many have come to WV to tell our story- some have done so better than others. But Eleanor's film
                is one of the very few that told our story in our own words; succinctly, and with a clarity and
                dignity that can’t be ignored. Our story is yet another in a long line of wake up calls happening
                around the world. Eleanor's film sounds that alarm in a way that can’t be denied."</p>
            <p><span>- Paul Corbit Brown</span> president Keepers of the Mountain</p>
        </div>
        <div class="card">
            <p>"In Hard Road of Hope, journalist, artist, and activist Eleanor Goldfield (of Art Killing Apathy and
                Act Out!) adds filmmaker to her growing resumé. In her debut documentary, Goldfield does a deep dive
                into coal country West Virginia, exploding the myths of "rednecks" and right wingers by looking at
                the long-time work of concerned residents there challenging king coal, fighting against frackers,
                and working to restore their environment as well as their dignity in a region long forgotten by many
                and left to outdated stereotypes. The people in this struggle remind us in their own words, oft
                ignored by the corporate media, of the challenges they've long faced, as well as their
                accomplishments on a hard road of hope. Excellent viewing for those who lack understanding of the
                political significance of working class campaigns for social justice into the 21st century." </p>
            <p><span>- Mickey Huff</span> director Project Censored; professor of social science and history</p>
        </div>
        <div class="card">
            <p>"You will likely be surprised by this history. I was. As West Virginians tell the story of this
                struggle, Eleanor weaves in the roots of capitalism, colonization and cultural genocide that created
                and made it possible to maintain such oppression."</p>
            <p><span>- Margaret Flowers</span> co-director Popular Resistance</p>
        </div>
    </div>
    <div class="press">
        <h2>Press</h2>
        <ul>
            {#each press as p}
            <PressLink {...p}/>
            {/each}
        </ul>
    </div>
</main>
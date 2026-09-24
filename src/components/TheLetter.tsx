import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading, Sparkle } from "./Magic";
import sealImg from "@/assets/wax-seal.png";

function Footprints() {
  const steps = Array.from({ length: 7 }, (_, i) => ({
    left: 6 + i * 12,
    top: 30 + (i % 2 ? 14 : 0),
    rot: (i % 2 ? 12 : -8) + i * 2,
    delay: i * 0.45,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-6 h-16">
      {steps.map((s, i) => (
        <span
          key={i}
          className="footprint"
          style={
            {
              left: `${s.left}%`,
              top: `${s.top}px`,
              transform: `rotate(${s.rot}deg)`,
              "--d": `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

function LetterParagraphs() {
  return (
    <div className="space-y-5 font-letter text-lg leading-relaxed sm:text-xl">
      <p className="font-hand text-4xl">Hemlo Cuntu Bamby,</p>
      <p>
        I pray for your eternal happiness and a long, beautiful life. ❤️
      </p>
      <p>
        26 years is a lot, especially when I think about the fact that for 26 years of
        your life, I wasn&rsquo;t there with you. And then somehow, in this birth, I have
        been blessed enough to become your partner.
      </p>
      <p>
        Despite the extremely little time that has actually passed since we came to know
        each other, the memories we have accumulated feel infinite.
      </p>
      <p>
        Sometimes I think about the most random, tiny things and they bring the biggest
        smile to my face. Like you making Maggi for the very first time at Wellington
        Heights. The number of movies we have watched in theatres — <em>Dhurandhar 2,
        Mortal Kombat, Evil Dead Burn, Main Wapas Aaunga, Hamlet, Spider-Man</em> — and
        I&rsquo;m sure there are a couple more that I&rsquo;m forgetting.
      </p>
      <p>
        I remember the first time we met on Dharamshala Road. The first time you came to
        Chandigarh and I literally ran to hug you on the road. The first time we slept in
        the car, with your head on my shoulder, in between the marriage. The first kiss
        you gave me. The time I came to Bir and you had a gift box waiting for me.
      </p>
      <p>
        <strong>14th</strong> is a date I can never forget. It was the first time I
        called you with the arranged Valentine&rsquo;s plan, and it was also the day we
        decided to be together.
      </p>
      <p>
        And then there are so, so, so many more. Visiting ISKCON. The entire Vrindavan
        trip. Staying at TDI and hugging you when I had just come home after work. Making
        burgers for you. Sleeping with my arms under your head. Making stupid videos
        together — doing challenges in a hotel, at TDI, or now that{" "}
        <em>&ldquo;ye sikhni ho gayi hai&rdquo;</em>, playing the guessing-the-number
        game. Going to so, so many places. Watching movies at home. Or sometimes doing
        absolutely nothing.
      </p>
      <p className="text-center font-semibold">Just being with you. Just being with you. Just being with you.</p>
      <p>
        I think that is what I love the most. It doesn&rsquo;t always have to be some
        grand moment. Sometimes I just want to sit beside you, look at you, talk nonsense
        with you, or even do nothing at all — and somehow that feels like enough.
      </p>
      <p>
        I wish the universe brings both of us eternal happiness together. Because when I
        look back, I realise how many times I had unknowingly wished for <em>you</em>.
      </p>
      <p>
        Mata Rani se maanga tha — <strong>&ldquo;Mata Rani, aapki jaisi wife se mujhe
        milana.&rdquo;</strong>
      </p>
      <p>
        Hanuman ji se kaha tha — <strong>&ldquo;Jaise aapne Ram Bhagwan ko Sita Mata se
        milvaya, waise mujhe bhi meri wife se mila dena.&rdquo;</strong>
      </p>
      <p>
        Aur Rameshwaram mein Shiv ji se apni Devi maangi thi. And somehow, today, I look
        at you and feel like those prayers were heard.
      </p>
      <p>
        It would be an understatement if I simply said that I love you. Because I
        don&rsquo;t just love you. I love your existence.
      </p>
      <p>
        I love your eyes, your smile, your nose, your voice, your little expressions, the
        way you laugh, the way you do things, the way you make ordinary days feel
        special. I love <em>everything that makes you, you.</em>
      </p>
      <p>
        Every cell in my body, every mitochondria generating the energy that keeps me
        alive, feels like it is screaming the same thing — <strong>I love Ishika.</strong>{" "}
        I love her existence.
      </p>
      <p>
        And if I could save time in a bottle, the first thing I would want to do would be
        to save every single day with you — <em>&rsquo;til eternity passes away, just to
        spend them with you.</em>
      </p>
      <p>
        Because if there is one thing I wish I could have more of, it is{" "}
        <strong>time with you.</strong>
      </p>
      <p>
        I want more mornings with you. More stupid fights. More movies. More trips. More
        food. More hugs. More kisses. More random conversations. More nights where we
        don&rsquo;t even realise how late it has become. More ordinary days that, years
        later, become our favourite memories. And more of <strong>you.</strong>
      </p>
      <p>
        I love you the most in this world. And on your birthday, more than anything else,
        I pray to God ki Bhagwan aapko <strong>achi sangat, sadbuddhi aur sadbhavna</strong>{" "}
        de.
      </p>
      <p>
        Aap hamesha khush raho. Aap healthy raho. Aapki aankhon ki ye chamak kabhi kam na
        ho. Aur agar meri kismat mein likha ho, toh main aapke saath ye sab dekhte hue
        apni poori zindagi guzaarun.
      </p>
      <p className="text-center">
        <strong>Happy Birthday, meri Cuntu Bamby.</strong>
      </p>
      <p className="text-center">I love you. More than I can ever properly put into words.</p>
      <p className="text-right font-hand text-4xl">— Tumhara ❤️</p>
    </div>
  );
}

export default function TheLetter() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative px-4 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Enclosed — one true letter"
        title="The Letter in the Envelope"
        subtitle="Some words were written on a birthday. They live here now, forever."
      />

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="parchment-panel relative rounded-lg p-8 sm:p-14">
          <img
            src={sealImg}
            alt=""
            width={80}
            height={80}
            loading="lazy"
            className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 drop-shadow-lg sm:h-20 sm:w-20"
          />
          <LetterParagraphs />
        </div>

        {/* the unbreakable charm over the letter */}
        <AnimatePresence>
          {!revealed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1.2 } }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg bg-night/70 p-6 text-center backdrop-blur-md"
            >
              <Sparkle className="h-5 w-5" />
              <p className="mt-6 max-w-md font-display text-lg leading-relaxed text-foreground sm:text-xl">
                This letter is guarded by a powerful charm.
              </p>
              <p className="mt-2 max-w-md text-muted-foreground">
                Only the true words will lift it:
              </p>
              <button
                onClick={() => setRevealed(true)}
                className="mt-8 cursor-pointer rounded-sm border border-gold/50 bg-gradient-to-r from-wine to-wine/80 px-8 py-4 font-display text-xs tracking-[0.3em] text-parchment uppercase transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(220,180,90,0.35)]"
              >
                &ldquo;I solemnly swear that I am up to no good&rdquo;
              </button>
              <Footprints />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {revealed ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mx-auto mt-8 max-w-xl text-center font-hand text-2xl text-gold"
        >
          Mischief managed. Read it slowly — every word was meant for her.
        </motion.p>
      ) : null}
    </section>
  );
}

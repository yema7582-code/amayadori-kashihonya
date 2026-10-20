# Scene 08 The Letter

[bg shop_night]
[bgm bgm_rain]
[se door_bell]

Minato: (The shop's lights were on. The sign still said "Closed.")

[if told_chikage -> s08_hurt]

[show shiori normal]

Shiori: I thought you would come.

Minato: There are still boxes left.

Shiori: That too.

[jump s08_open]

[label s08_hurt]

[show shiori cold]

Shiori: ...We are already closed today.

Minato: I heard. About the shopping street.

Shiori: I see.

Minato: Chikage told her mom, and that's how it spread. Because I told Chikage about the letter. I'm sorry.

[show shiori sad]

Shiori: You did not tell her about the closing, did you?

Minato: I didn't. But I'm the one who started it.

Shiori: ...The fishmonger's wife cried at me. "Why didn't you tell me?"

Shiori: I wanted to tell them myself. Each of our last customers, one by one, properly.

Minato: Yeah.

Shiori: I am angry.

Minato: Yeah.

[show shiori normal]

Shiori: But I also know there is no point being angry at you, Shinomiya.

Shiori: ...Come in. You will get wet.

[label s08_open]

[if trust_shiori < 2 -> s08_alone]

[show shiori normal]

Shiori: I am opening it. I promised.

Minato: (Shiori set a paper knife on the counter and took one deep breath.)

[jump s08_read]

[label s08_alone]

[show shiori normal]

Shiori: I thought about it alone last night.

Shiori: In the end, someone has to know what is inside before my grandfather reads it. His eyes are bad.

Shiori: ...You can just watch. I am the one who will read it.

[label s08_read]

[se paper]

Minato: (The sound of the seal tearing echoed louder than I expected.)

Minato: (Inside were two sheets of letter paper. One was old, its edges gone brown. The other was newer.)

[bg letter_cg]
[bgm bgm_memory]

Shiori: "Dear Dad,"

Shiori: "I wrote this letter in the winter of my third year of high school. I wrote it meaning to send it, and couldn't."

Shiori: "You and Mom split up, I went with Mom, and I became a Minase. I think the reason I still decided to go to high school in this town was this shop."

Shiori: "Taking the library job was really just because I wanted an excuse to come to the shop. I think you knew."

Shiori: "I'm sorry for always writing at the desk by the window. Never reading, just spreading out my notebooks. I can't complain if you call me 'a girl who doesn't take care of books.'"

Minato: (Shiori's voice stopped for a moment.)

Shiori: "I'm going to Tokyo. I know you'd be against it, so I'm going without telling you."

Shiori: "But this shop is my favorite place in the world. That's the one thing I wanted to make sure I wrote down."

Shiori: "I loved sheltering from the rain here on rainy days."

[se paper]

Shiori: ...There is another sheet.

Shiori: "More than ten years later, I'm finally sending this. It turned up at the back of a drawer."

Shiori: "I have a daughter. She's six. She loves books. She takes much better care of them than I ever did."

Shiori: "Her name is Shiori—like a bookmark. I named her in this shop."

Shiori: "Someday I'll bring her. When I do, please lend her the desk by the window. Haruka"

[bg shop_night]
[bgm bgm_rain]
[se rain_loop]

[show shiori sad]

Minato: (Shiori didn't move for a while, the letter still in her hands.)


Shiori: ...

Minato: (Shiori was gently pressing her thumb over her own name on the second sheet.)
Minato: ...The postmark was June, ten years ago, right?

Shiori: My mother died that autumn.

Minato: ...

Shiori: "I'll bring her," she said.

Shiori: So she never got to bring me here.

Minato: (I felt like I had to say something. Nothing came.)

Minato: (Instead, I pushed the box of tissues at the end of the counter to where Shiori could reach it.)

[show shiori normal]

Shiori: ...That's what you do.

Minato: Hm?

Shiori: Nothing.

Shiori: The letter arrived the same week Shinomiya—your sister—borrowed the book, didn't it?

Minato: My sister's card was from the same week.

Shiori: My grandfather has a habit of putting the mail on top of piles of books. He still does.

Minato: So the letter that arrived got slipped into a book on the returns shelf—

Shiori: And spent ten years on the Shinomiya family's bookshelf.

Minato: ...I'm going to have a proper talk with my sister.

[show shiori smile]

Shiori: It is not your sister's fault. It is my grandfather's.

Shiori: Besides, because your sister kept it for ten years, you came to return it, Minato.

Minato: (She called me by my name.)

[show shiori normal]

Shiori: Tomorrow I am going to the hospital. I will read this to my grandfather.

Shiori: ...Will you come with me?

Minato: I'll come.

[bgm stop]
[bg black]

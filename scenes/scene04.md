# Scene 04 商店街の雨  [STUB: outline.md 47-52]

[bg street_rain]
[bgm bgm_rain]
[se rain_loop]

[show shiori normal]

栞: 十年前の常連さん、商店街の人なら覚えているかもしれません。

[hide]

魚屋のおかみさん: ああ、いたいた。いつも店の奥で何か書いてた高校生の女の子。

湊: （帰り道、雨が強くなる。栞の古い紺の傘に、二人で入った）

[se umbrella_open]
[show shiori blush]

[choice]
- 「傘、俺が持つよ」 -> choice04_a
- 何も言わない -> choice04_b
[/choice]

[label choice04_a]
[flag trust_shiori +1]

湊: 傘、俺が持つよ。

栞: ……ありがとう、ございます。

[jump scene04_end]

[label choice04_b]

湊: （肩が濡れていくのを、黙って見ていた）

[label scene04_end]
[bg black]

# Scene 03 貸本屋、二度目  [STUB: outline.md 40-45]

[bg shop_rain]
[bgm bgm_mystery]
[se door_bell]

[show shiori cold]

栞: ……また来たんですか。

湊: 手伝う。棚の整理、大変だろ。

[show shiori normal]

栞: 祖父は入院しています。この字も、誰のものかわからないそうです。

湊: （二人で、当時の貸出カードの束をめくる）

[choice]
- 貸出カードの裏を詳しく見る -> choice03_a
- 先に封筒の字を見る -> choice03_b
[/choice]

[label choice03_a]
[flag found_stamp = 1]

湊: ……裏に、古い印が押してある。「潮見高校図書室」？

[show shiori surprised]

栞: 学校の、図書室……。

[jump scene03_end]

[label choice03_b]

湊: 字が丸い。女の子の字っぽいな。

栞: ……そうですね。

[label scene03_end]
[bg black]

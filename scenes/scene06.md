# Scene 06 神社の石段  [STUB: outline.md 58-63]

[bg shrine_steps]
[bgm bgm_memory]

[show shiori sad]

栞: 母は、私が小さい頃に亡くなりました。祖父は、母のことを一度も話さない。

[if found_stamp -> s06_know]

湊: たぶん……手紙の人は、栞のお母さんだと思う。（推測でしかないけど）

[jump s06_choice]

[label s06_know]

湊: 手紙を書いたのは、水瀬遥さん――栞のお母さんだ。

[label s06_choice]
[choice]
- 「一緒に読もう」 -> choice06_a
- 「栞が決めていい」 -> choice06_b
[/choice]

[label choice06_a]
[if trust_shiori == 0 -> s06_refuse]
[flag trust_shiori +1]

湊: 一緒に読もう。

[show shiori smile]

栞: ……うん。

[jump scene06_end]

[label choice06_b]
[if trust_shiori == 0 -> s06_refuse]
[flag trust_shiori +1]

湊: 栞が決めていい。

[show shiori blush]

栞: 湊くんって、ずるいね。

[jump scene06_end]

[label s06_refuse]
[flag trust_shiori +1]
[show shiori cold]

栞: ……まだ、開けられません。

[label scene06_end]
[bg black]

# Scene 05 図書室の古い記録  [STUB: outline.md 54-56]

[bg library]
[bgm bgm_mystery]

[show chikage normal]

千景: 十年前の図書委員名簿、書庫から出してきたよ。

[if told_chikage -> s05_shiori]
[jump s05_search]

[label s05_shiori]
[show shiori normal]

栞: ……千景さんに呼ばれて。お邪魔します。

[label s05_search]
[if found_stamp -> s05_found]

湊: （名前が多すぎて、決め手がない。字の丸い女子生徒、というだけでは……）

[jump s05_end]

[label s05_found]

湊: 印の日付と照らすと……この人だ。「水瀬 遥」。

[show shiori surprised]

栞: ……それ、母の旧姓です。

[label s05_end]
[bg black]

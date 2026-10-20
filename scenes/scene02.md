# Scene 02 翌朝の教室〜図書室  [STUB: outline.md 33-38]

[bg library]
[bgm bgm_daily]
[se school_chime]

湊: （翌朝。昨日の封筒のことが頭から離れない）

[show chikage normal]

千景: 顔に書いてあるよ。何かあったでしょ。

湊: 別に。

[show chikage smile]

千景: ふーん。そういえばさ、商店街の古い貸本屋。昔はこの図書室と提携してたんだって。

湊: （……久世貸本店のことだ）

[choice]
- 手紙のことを千景に話す -> choice02_a
- 曖昧にごまかす -> choice02_b
[/choice]

[label choice02_a]
[flag told_chikage = 1]

湊: 実は昨日、その店で古い手紙を見つけてさ。

[show chikage surprised]

千景: え、なにそれ。面白そうじゃん。

[jump scene02_end]

[label choice02_b]
[flag kept_secret = 1]

湊: いや、なんでもない。

[show chikage pout]

千景: ……あっそ。

[label scene02_end]
[bg black]

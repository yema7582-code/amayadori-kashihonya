# Scene 07 千景の忠告  [STUB: outline.md 65-70]

[bg seawall_eve]
[bgm bgm_heart]
[se waves]

[show chikage sad]

千景: あたしさ、ずっと前から湊のこと好きだったよ。

千景: でも気になるのは……湊、あの子のこと見てるの？ それとも謎を追ってるだけ？

[if told_chikage && !kept_secret -> s07_leak]
[jump s07_choice]

[label s07_leak]

千景: ……ごめん。お母さんに店のこと話しちゃって。閉店の話、町中に広まってる。

湊: （栞は、きっと傷ついている）

[label s07_choice]
[choice]
- 礼を言って、自分の気持ちは栞にあると伝える -> choice07_a
- 「今は答えられない」 -> choice07_b
[/choice]

[label choice07_a]
[flag chose_shiori = 1]

湊: ありがとう、千景。……でも俺は、栞のことが気になってる。

[show chikage smile]

千景: 知ってた。顔に書いてあるもん。

[jump scene07_end]

[label choice07_b]
[flag answer_later = 1]

湊: 今は、答えられない。

[show chikage pout]

千景: ……ずるいなあ。

[label scene07_end]
[bg black]

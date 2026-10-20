# Scene 01 雨中的租书屋

[bg street_rain]
[bgm bgm_rain]
[se rain_heavy]

湊: （……天气预报也太不准了吧。）

湊: （我把书包顶在头上跑。商店街的拱廊顶棚到一半就断了。）

湊: （满街都是拉下的卷帘门，只有一家还亮着灯。）

[se door_slide]
[se door_bell]
[bg shop_rain]
[se rain_loop]

湊: 不好意思，就待一会儿——

[show shiori cold]

栞: 七点关门。

湊: 啊，我只是避个雨。马上就走。

栞: ……伞架在那边。身上湿着的话，请不要碰书架。

湊: （我没带伞。不过没说出口。）

湊: （有股旧纸张的味道。书一直塞到天花板，书脊全都被晒得褪了色。）

湊: 这里是书店？

[show shiori normal]

栞: 是租书屋。

湊: 租书屋。

栞: 就是借书、看完、再还回来的店。

湊: ……哦。

湊: （说起来——我翻了翻书包。今天早上姐姐硬塞给我的一本书。）

湊: 这本，应该是你们店的。我姐说她以前借了一直忘了还。

[show shiori surprised]

栞: ……「久世租书店」。是我们家的。

栞: 不过借出日期是十年前。

湊: 抱歉。那个，要交滞纳金吗……

栞: 我们店不收那种东西。

[se book_drop]

湊: 啊。

湊: （栞伸手接过时，书从她手里掉了下去。）

[se paper]

湊: （一个白色信封从书页间滑了出来。）

湊: 里面夹着东西。

[show shiori normal]

栞: 「久世先生收」……

湊: 邮戳也是十年前的。

栞: 封口没拆过。

湊: （收件人的字迹圆圆的，微微向右倾斜。）

湊: 久世先生，是店里的人？

栞: 是我祖父。

湊: 那，这是寄给你爷爷的——

[show shiori cold]

栞: 祖父现在不在这里。

湊: （那语气分明在说：别再问了。）

湊: （只剩下雨声还在继续。）

[choice]
- 「要不要打开看看？」 -> choice01_a
- 「还是交给你爷爷比较好吧。」 -> choice01_b
[/choice]

[label choice01_a]

湊: 要不要打开看看？

[show shiori cold]

栞: 这是别人的信。

湊: ……也是。抱歉。

栞: 不过。

湊: 嗯？

[show shiori normal]

栞: ……不，没什么。

[jump scene01_end]

[label choice01_b]
[flag trust_shiori +1]

湊: 还是交给你爷爷比较好吧。毕竟都等了十年了。

[show shiori surprised]

栞: 你是说，等了十年的是这封信？

湊: 两边都是吧？

[show shiori normal]

栞: ……你这人真奇怪。

湊: 经常有人这么说。

[jump scene01_end]

[label scene01_end]

[se rain_loop]

湊: （雨渐渐小了。）

湊: 那我先走了。书能还回来真是太好了。

栞: 那个。

[show shiori sad]

栞: 这家店，这个月底就要关门了。

湊: 诶？

栞: 我还没跟任何人说过。……请你也不要说出去。

湊: 那为什么告诉我？

栞: 为什么呢。

[show shiori normal]

栞: 也许是因为，你是十年来第一个回来还书的人吧。

[se door_bell]

湊: （走出门外，细细的雨还在下。）

湊: （回头望去，玻璃门后，她正把那个信封举向灯光。）

[bgm stop]
[bg black]

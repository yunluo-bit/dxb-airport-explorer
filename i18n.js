'use strict';
(() => {
 const dictionary=new Map();
 function add(lines){for(const line of lines.trim().split('\n')){const i=line.indexOf('|');if(i>0)dictionary.set(line.slice(0,i).trim(),line.slice(i+1).trim());}}
 add(`
Skip to the exploration|跳到探索内容
BETWEEN FLIGHTS|航班之间
Overview|机场概览
The journey|转机旅程
Services|机场服务
Passengers|旅客需求
Our take|我们的思考
15 scenes|15 个场景
Sources ↗|资料来源 ↗
DUBAI INTERNATIONAL AIRPORT / 01|迪拜国际机场 / 01
A world|航班之间，
between flights.|还有一个世界。
Dubai International Airport, from the scale of a city to the space around your seat.|探索迪拜国际机场：从城市般的尺度，到座位身边的空间。
Airport in motion|机场动态影像
Whole airport|机场全景
Explore the journey ↗|开启转机旅程 ↗
Choose a scene|自由选择场景
Five chapters · Fifteen places to pause · Your own way through|五个章节 · 十五个探索场景 · 自由选择顺序
DUBAI, UNITED ARAB EMIRATES|阿联酋 · 迪拜
DXB / A REAL PLACE, IN MOTION|DXB / 走进真实运转的机场
Continue exploring ↓|继续探索 ↓
01 / OVERVIEW|01 / 机场概览
Beyond the silhouette.|从飞机外观，
Inside the A380.|走进 A380 客舱。
An airport is more than its aircraft. Explore the apron, open the fuselage, then step into the photographed cabin.|先看机坪上的飞机，再打开机身，进入真实客舱影像，探索上下两层的空间。
01 / On the apron|01 / 机坪外观
02 / Open the cabin|02 / 打开客舱
Real DXB background · interactive 3D aircraft|真实 DXB 背景 · 可交互飞机模型
AIRCRAFT STUDY / UNPAINTED A380-800|飞机外观探索 / 无涂装 A380-800
Load the interactive aircraft ↗|载入可交互飞机 ↗
The 3D aircraft loads when you choose to explore it.|点击按钮，载入三维飞机并开始探索。
Backdrop: a real A380 photograph at Concourse A.|背景：A 候机廊的 A380 实拍照片。
DXB / AIRSIDE|DXB / 机坪区域
Real DXB apron / explore the aircraft|真实 DXB 机坪 / 探索飞机
INSIDE THE A380 / PHOTOGRAPHY BY EMIRATES|走进 A380 / Emirates 实拍
← Back to the apron|← 返回机坪
MAIN DECK / FORWARD CABIN|主层 / 前部客舱
Premium Economy|豪华经济舱
2–4–2 seating · 56 seats|2–4–2 座椅布局 · 56 个座位
⤢ Inspect the cabin|⤢ 放大查看客舱
TWO DECKS / SELECT A SPACE|上下两层 / 选择客舱空间
NOSE → TAIL|机头 → 机尾
Upper|上层
First|头等舱
Business|商务舱
Lounge|休闲区
Main|主层
Stairway|楼梯
Economy|经济舱
Photographed spaces · zone positions are approximate|实拍空间 · 下方为区域位置导航
▶ Guided cabin tour|▶ 自动游览客舱
Ⅱ Pause cabin tour|Ⅱ 暂停客舱游览
Both decks|上下两层
Upper deck|上层客舱
Main deck|主层客舱
A380-800 / TRENT 900 · INTERACTIVE SPATIAL STUDY|A380-800 / TRENT 900 · 交互探索
Reset view|重置视角
Drag horizontally to rotate · use + / − to zoom · wheel scrolls the page|水平拖动旋转 · ＋ / − 缩放 · 滚轮浏览页面
INSIDE / AN EMIRATES FOUR-CLASS EXAMPLE|客舱 / 阿联酋航空四舱配置示例
Two decks. Four ways to fly.|两层客舱，四种飞行体验。
First · 14|头等舱 · 14 席
Business · 76|商务舱 · 76 席
Premium Economy · 56|豪华经济舱 · 56 席
Economy · 338|经济舱 · 338 席
Seats and zones follow Emirates’ December 2020 four-class example. Select a zone to move from the aircraft into real cabin photography. The zone navigator shows relative positions, not a booking seat map.|座位数量与舱位分区依据阿联酋航空 2020 年 12 月公布的四舱配置。选择区域，即可从飞机外观进入对应的实拍客舱。导航展示相对位置，不能用于订票选座。
⤢ Open photograph|⤢ 查看实拍照片
THE REAL INTERIOR / EMIRATES PHOTOGRAPHY|真实客舱 / 阿联酋航空摄影
A different pace on the main deck.|主层前部，更宽裕的乘坐空间。
56 Premium Economy seats in a 2–4–2 arrangement occupy the forward main deck in this example.|本配置中，56 个豪华经济舱座位位于主层前部，采用 2–4–2 排列。
First Class|头等舱
Business Class|商务舱
Economy Class|经济舱
Connecting the decks|连接上下两层
Onboard lounge|机上休闲区
Onboard Lounge|机上休闲区
The published cabin configuration ↗|查看已公布的客舱配置 ↗
SELECT AN AIRCRAFT PART|选择一个飞机部件
An aircraft built on a different scale.|感受 A380 的空间尺度。
A full double-deck fuselage, four engines and an almost 80-metre wingspan. Select a numbered part, or open the cabin to explore what fits inside.|全长双层机身、四台发动机、接近 80 米的翼展。点击编号了解部件，或打开客舱探索内部空间。
Official Emirates A380 information ↗|阿联酋航空 A380 官方资料 ↗
Model credits & licence ↗|模型来源与许可 ↗
See the whole airport.|先看整个机场，
Then move closer.|再走近每一处空间。
Two runways. A network of concourses. Open the full airport panorama, then explore the terminal at ground level.|两条跑道与相连的候机廊，共同构成 DXB。先打开机场全景，再从地面视角探索航站楼。
THE AIRPORT / THREE SCALES|机场 / 三种观察尺度
Satellite|卫星视角
Terminal 3|3 号航站楼
⤢ Explore full resolution|⤢ 查看完整大图
AERIAL ARCHIVE / 17 DECEMBER 2013|航拍档案 / 2013 年 12 月 17 日
An actual airport-wide view: parallel runways frame the terminal and concourse complex. This dated photograph shows the scale of DXB; it is not a live navigation map.|真实机场全景：平行跑道环绕着航站楼与候机廊。这张历史照片用于认识 DXB 的规模，不作为实时导航地图。
02 / AT GROUND LEVEL|02 / 地面视角
FROM ABOVE → UP CLOSE|从空中俯瞰 → 走近观察
Inspect photograph|观察照片细节
DXB / A PHOTOGRAPHIC VIEW|DXB / 实拍视角
Find your bearings.|认识你所在的空间。
Select a visible feature to inspect it. The photograph shows one moment and one viewpoint.|选择画面中的特征并仔细观察。照片记录的是一个时刻、一个视角。
guests in 2025|2025 年旅客量
Official annual figure ↗|官方年度数据 ↗
Our question: How does DXB meet different passengers’ needs during a connection?|我们的研究问题：DXB 如何在转机过程中满足不同旅客的需求？
Speaker 1 · a three-minute starting point|第 1 位同学 · 约 3 分钟开场
Introduce the guiding question and the 2025 annual figure. Use one A380 part to introduce aviation vocabulary, then one real architectural feature to explain the difference between a digital model and an airport photograph.|提出研究问题并介绍 2025 年旅客量。选一个 A380 部件讲解航空词汇，再用真实建筑照片引出机场空间。
02 / THE JOURNEY|02 / 转机旅程
One connection.|一次转机，
Several decisions.|一连串选择。
From your first question to the boarding gate: explore four moments that shape a connection.|从第一次问路到抵达登机口，探索影响转机体验的四个环节。
Get information|获取信息
Confirm the gate|确认登机口
Use the wait|安排候机时间
Prepare to board|准备登机
DXB / A THEMATIC VIEW|DXB / 按主题观察
Start with clear information.|先获得清晰的信息。
YOU COULD SAY|可以这样用英语询问
Thematic photographs, not a continuous route or a record of one passenger’s journey.|照片按主题组织，不代表一位旅客的连续行程。
Reset this stage ↺|重置本环节 ↺
Understand the|认识机场的
airport’s spaces.|不同空间。
See the terminals from above and at ground level. Select a concourse to discover its real architecture.|结合俯视与地面视角认识航站楼。选择候机廊，查看真实建筑空间。
D Gates|D 区登机口
F Gates|F 区登机口
A · B · C Gates|A · B · C 区登机口
REAL T3 PHOTOGRAPH · NOT A MAP|T3 实拍照片 · 非导航地图
Explore the official airport map ↗|打开机场官方地图 ↗
Opens the live Dubai Airports map in a separate tab. Its terminal selection and zoom are independent of this photo explorer.|将在新标签页打开迪拜机场官方地图。地图中的航站楼选择与缩放独立于当前照片展示。
TERMINAL 3|3 号航站楼
Three concourses. One terminal.|一座航站楼，三个候机廊。
T3 contains A, B and C Gates. B and C connect on foot; A is reached by airport train. Confirm your actual connection with your airline or airport staff.|T3 包括 A、B、C 三个区域。B 与 C 之间可步行，前往 A 区需乘机场列车。具体转机安排请向航空公司或机场工作人员确认。
A Gates|A 区登机口
B Gates|B 区登机口
C Gates|C 区登机口
Official live map checked 11 November 2026. Photographs are archived views with individual source notes.|官方地图核对日期：2026 年 11 月 11 日。实拍照片各自附有来源与时间说明。
Official terminal and transfer guidance ↗|官方航站楼与转机指引 ↗
Connections are not walking directions or transfer-time estimates.|区域关系不代表具体步行路线或转机时间。
At the gate.|来到登机口，
Inside and outside.|观察窗内与窗外。
Inside|候机区内
Apron view|机坪视角
⤢ Inspect the real scene|⤢ 放大观察实景
A place to wait and watch.|等待，也是观察的时刻。
Observe the passenger space before looking at the aircraft outside. These photographs show separate viewpoints and moments, not the same aircraft arriving at the same gate.|先看旅客候机空间，再观察窗外飞机。两张照片来自不同视角和时刻。
Speaker 2 · a three-minute exploration|第 2 位同学 · 约 3 分钟旅程探索
Choose one transfer stage and demonstrate its English expression. Explain the T3 A/B/C relationship using the official material, then switch between the inside and apron photographs. Do not present the photographs as a continuous journey.|选一个转机环节示范英语表达。结合官方资料解释 T3 的 A、B、C 区关系，再切换候机区与机坪照片作比较。
03 / SERVICES|03 / 机场服务
Rest between|在航班之间，
flights.|停下来休息。
Step out of the concourse and into a quieter space. Explore the reception, then look inside a sleeping cabin.|从繁忙候机廊进入安静空间。先看接待处，再走进真实休息舱。
⤢ Enlarge photograph|⤢ 放大照片
T3 / B GATES PHOTO|T3 / B 区实拍
A dedicated rest option.|专门为休息提供的空间。
BEFORE CHOOSING|选择之前
Confirm the location, availability, facilities and price. Sleepover is a commercial product. Showers are offered at selected locations.|先确认地点、空位、设施与价格。Sleepover 是付费服务，部分地点提供淋浴。
Official facility details ↗|官方设施详情 ↗
⤢ Inside the cabin|⤢ 查看休息舱内部
FROM RECEPTION TO REST|从接待处走向休息空间
A little room|一小处空间，
to recharge.|让旅途重新充电。
Look inside the real sleeping cabin. A private resting space changes the experience of a long connection.|看看真实休息舱的内部。私密的休息空间，为漫长转机提供不同的体验。
Facility photographs show an example; confirm your location, product and availability.|照片展示一种设施示例，请确认实际地点、房型与空位。
A taste of|在机场，
the airport.|发现美食。
Food Village / T3 C Gates.|Food Village / T3 C 区登机口。
Move across the real dining photograph.|移动视角，观察真实餐饮空间。
THE WHOLE SPACE|整体空间
⤢ Full photograph|⤢ 查看完整照片
The sign|区域标识
Dining counters|餐饮柜台
Shared seating|公共座位
A clear name for a dining space.|一个清晰可见的餐饮区名称。
Food Village is a dining collection at C Gates. The photograph lets us observe the real space; it does not establish today’s menu, price or opening hours.|Food Village 位于 C 区登机口。实拍照片用于观察空间，菜单、价格和开放时间以现场信息为准。
Official Food Village listing ↗|Food Village 官方介绍 ↗
Different needs.|不同需求，
Different places.|对应不同空间。
Family / T3 B|家庭空间 / T3 B
Support / T2|辅助服务 / T2
⤢ Inspect photograph|⤢ 观察照片
TERMINAL 3 / B GATES / DEPARTURES|3 号航站楼 / B 区 / 出发区域
Room for a family break.|给家庭留出休息与玩耍的空间。
KEEP THE LOCATION IN VIEW|同时留意所在区域
A useful facility still needs to fit the passenger’s actual departure area.|再合适的设施，也需要与旅客实际出发区域相匹配。
Official facility information ↗|官方设施信息 ↗
Speaker 3 · a three-minute service comparison|第 3 位同学 · 约 3 分钟服务比较
Inspect one Sleepover detail, then one part of Food Village. Finish with the family/support switch and explain why the T2 lounge must not be added to a T3 passenger’s assumed route.|观察 Sleepover 与 Food Village 的各一处细节。切换家庭与辅助服务，说明它们的位置差异，以及为何不能把 T2 设施直接放进 T3 旅客的路线。
04 / PASSENGERS|04 / 旅客需求
Same airport.|同一座机场，
Different priorities.|不同的优先需求。
GROUP-DESIGNED SCENARIOS|小组设计的旅客情境
A tired traveller|疲惫的旅客
A family in transit|转机中的家庭
A traveller seeking support|需要辅助服务的旅客
“I want to rest, but I also need to finish some work.”|“我想休息一下，但还有工作需要完成。”
CHOOSE YOUR NEEDS / COMBINE ANY|选择需求 / 可以自由组合
Needs to compare|比较不同需求
Rest|休息
A meal|用餐
Work|工作
Family|家庭活动
Accessibility|无障碍与辅助服务
These are designed examples, not interviews or survey findings. Service examples in different areas do not form a suggested route.|这些情境由小组设计，并非访谈或调查结果。不同区域的服务示例不构成实际路线建议。
Read the place.|读懂眼前的空间。
Find useful English in a real photograph. Select the outlined region you think answers the question.|在真实照片中寻找实用英语。选择你认为能回答问题的区域。
LOOK / SELECT / EXPLAIN|观察 / 选择 / 解释
Which sign tells you this is a place to find food?|哪个标识告诉你这里可以找到餐饮？
Show a hint ↗|查看提示 ↗
Select a region to explain your choice. This is an observation task; no other content is locked.|选择一处区域，并解释你的理由。你也可以随时继续探索其他内容。
Try again ↺|再试一次 ↺
Ask well.|问得清楚，
Understand more.|理解更多。
TEACHING DIALOGUE / NOT A STAFF PROMISE|英语练习 / 非真实服务承诺
Next situation →|下一个情境 →
Start again ↺|重新开始 ↺
Speaker 4 · a three-minute English interaction|第 4 位同学 · 约 3 分钟英语互动
Choose a traveller, adjust their needs and explain one reason. Invite the audience to identify the Food Village sign, then demonstrate one dialogue choice. Describe the dialogue as group-written practice, not a real employee’s answer.|选择旅客情境，调整需求并解释原因。邀请听众辨认 Food Village 标识，再示范一轮英语对话。说明对话是小组编写的练习。
05 / OUR TAKE|05 / 我们的思考
What makes|怎样才是
a good connection?|一次好的转机体验？
Clarity, comfort and inclusion. Use what you have seen to build your own view of the passenger experience.|从信息清晰、空间舒适与服务包容三个方面，结合观察形成自己的观点。
Clarity|信息清晰
Comfort|空间舒适
Inclusion|服务包容
OFFICIAL FACT / VISIBLE EVIDENCE|官方事实 / 可见证据
DRAFT INTERPRETATION / FOR GROUP REVIEW|分析观点 / 供小组讨论
Explore the reasoning|展开分析理由
TAKE THE QUESTION WITH YOU|带着问题继续思考
What would you|你最想优先
improve first?|改善什么？
Choose a priority to explore a proposed argument. Your choice stays on this page.|选择一个优先方向，查看相应论点。选择仅保留在当前页面。
CLARITY / FINDING YOUR WAY|信息清晰 / 找到前进方向
A DISCUSSION / NOT A POLL|课堂讨论 / 不收集投票
For whom would that change matter most?|这一改变对谁最有帮助？
Think about one traveller. Explain which change would make their connection easier, and why.|想一位具体的旅客，解释哪一种改变能让其转机更轻松，以及原因。
Clear my choice ↺|清除选择 ↺
Speaker 5 · a three-minute conclusion|第 5 位同学 · 约 3 分钟总结
Choose one evaluation lens and separate the evidence from its interpretation. Ask the audience which improvement would help a specific passenger most. The final film is optional; the whole report remains freely explorable.|选择一个评价角度，区分事实证据与小组分析。请听众讨论哪种改善最能帮助某类旅客。最后的视频可按展示时间选择播放。
Many journeys.|万千旅程，
One airport.|相遇于此。
A final moment from the real airport. Then take your own question back into the journey.|以真实机场影像收尾，再带着自己的问题回到探索之中。
THE REAL DXB / A FILM BY DUBAI AIRPORTS|真实的 DXB / 迪拜机场出品
Behind every connection,|每一次顺利转机的背后，
there are people.|都有人在用心连接。
Ⅱ Pause film|Ⅱ 暂停视频
▶ Play film|▶ 播放视频
▶ Try film again|▶ 重新播放视频
Watch the original oneDXB film ↗|观看 oneDXB 原片 ↗
Return to any scene ☷|返回任意场景 ☷
Excerpt from Dubai Airports’ 2024 oneDXB campaign film. Original footage; no generated flight animation.|片段来自迪拜机场 2024 年 oneDXB 宣传影片，采用原始实拍影像。
There is more|在航班之间，
01 Overview|01 机场概览
02 The journey|02 转机旅程
03 Services|03 机场服务
04 Passengers|04 旅客需求
05 Our take|05 我们的思考
An English group report · DXB only|专业英语小组报告 · 迪拜国际机场 DXB
Official sources checked 11 November 2026 · Local expanded edition|资料核对：2026 年 11 月 11 日 · 本地交互版本
Sources, credits & method ↗|来源、署名与说明 ↗
Reset exploration ↺|重置探索 ↺
Pause motion|暂停动态
Resume motion|恢复动态
FREE EXPLORATION|自由探索
Where next?|接下来，去哪里？
Every scene is open. Nothing needs to be completed first.|所有场景均可直接进入，自由选择探索顺序。
A CLOSER LOOK / REAL SOURCE IMAGE|走近观察 / 真实来源照片
Inspect the photograph|观察照片细节
Drag to inspect · arrow keys move the view|拖动观察 · 方向键移动视角
EVIDENCE / METHOD / CREDITS|证据 / 方法 / 署名
Behind the exploration.|探索背后的资料。
Checked 11 November 2026 · Local educational report|核对日期：2026 年 11 月 11 日 · 本地教学报告
Facts and primary sources|事实与一手来源
Photographs|照片来源
Digital model and software|三维模型与软件
Three.js 0.180.0 · MIT licence. The model is a third-party digital aircraft study, not a manufacturer’s engineering model.|Three.js 0.180.0，采用 MIT 许可。飞机模型来自第三方社区，用于视觉探索，不属于制造商工程模型。
Software licence ↗|软件许可 ↗
How to read this report|如何理解本报告
Passenger profiles, English exercises and the sequence of teaching themes were designed for this report. They are not interviews or records of an actual transfer. Proposed arguments in scenes 13–14 are explicitly labelled drafts for group review.|旅客情境、英语练习与教学顺序为本报告设计，并非实际访谈或转机记录。第 13—14 区的分析为供小组讨论的观点。
The 95.2 million figure refers to the year 2025. No live flight information, real gate assignment, walking distance or minimum transfer time is provided. Different locations and photographic moments are not presented as one continuous journey.|9520 万人次为 2025 年数据。本报告不提供实时航班、登机口分配、步行距离或最短转机时间。不同地点与照片时刻不代表连续旅程。
Availability, access and commercial charges need confirmation with the airport, airline or facility. Airline-exclusive lounge access is not assumed. The Assisted Travel Lounge is in T2, separate from the T3 examples.|设施空位、使用条件与费用需向机场、航空公司或经营方确认。辅助出行休息室位于 T2，与本报告中的 T3 服务示例分开呈现。
Static text and real photographs remain available if the digital viewer cannot load. The map is official source material, with its edition and limits shown in the map scene.|三维内容无法载入时，仍可阅读文字与真实照片。地图采用官方来源，相关说明见地图场景。
Return to exploring|返回探索
Enable JavaScript to use the scene controls, photo inspection and digital aircraft. The report headings and official links remain available.|请启用 JavaScript 使用场景切换、照片观察与三维飞机。报告标题和官方链接仍可查看。
FILMED AT DXB / oneDXB · 2024|拍摄于 DXB / oneDXB · 2024
DXB IN MOTION|运转中的 DXB
People make the connection.|人与人，让旅途相连。
Watch how a question becomes a direction.|从一次询问，到找到前进方向。
ASK|询问
LISTEN|倾听
FIND YOUR WAY|找到方向
More than a place to pass through.|不止途经，更能停留。
A moving glimpse of dining and waiting at DXB.|通过动态影像，感受 DXB 的餐饮与候机空间。
PAUSE|放慢脚步
EXPLORE|发现空间
CONNECT|连接旅途
See the journey from another angle.|换一个角度，看见旅程。
Movement, people and the spaces between them.|人流、空间，以及发生在其中的体验。
CLARITY|信息清晰
COMFORT|空间舒适
INCLUSION|服务包容
Real airport footage · oneDXB / 2024|真实机场影像 · oneDXB / 2024
Film source ↗|影片来源 ↗
Opening the fuselage into the real cabin…|正在打开机身，进入真实客舱……
Inside the real cabin · select a space on either deck|真实客舱内部 · 选择上下层空间
Real DXB apron · interactive A380 exterior|真实 DXB 机坪 · 可交互 A380 外观
UPPER DECK / FORWARD CABIN|上层 / 前部客舱
14 private suites|14 间私人套间
Private suites occupy the forward upper deck in the published four-class example. This photograph shows the refreshed First Class finishes released in 2023.|在该四舱配置中，私人套间位于上层前部。实拍照片展示 2023 年公布的焕新头等舱内饰。
Two seats by each window and four in the centre, with two aisles. Premium Economy occupies the forward main deck in this four-class example.|两侧靠窗各两个座位，中间四个座位，设两条通道。该四舱配置的豪华经济舱位于主层前部。
MAIN DECK / MIDDLE & REAR CABIN|主层 / 中后部客舱
3–4–3 seating · 338 seats|3–4–3 座椅布局 · 338 个座位
Three seats by each window and four in the centre. The two aisles continue through the largest passenger cabin on the main deck.|两侧靠窗各三个座位，中间四个座位。两条通道贯穿主层面积最大的乘客区域。
UPPER DECK / MIDDLE CABIN|上层 / 中部客舱
1–2–1 seating · 76 seats|1–2–1 座椅布局 · 76 个座位
Staggered seats give each passenger aisle access. The Business Class cabin extends along the upper deck behind First Class.|交错排列的座椅让每位乘客都可直接进入通道。商务舱沿上层布置，位于头等舱后方。
FORWARD STAIRWAY / MAIN ↔ UPPER|前部楼梯 / 主层 ↔ 上层
One aircraft · two full passenger decks|一架飞机 · 两层完整客舱
The forward stairway connects the two passenger decks. View the real finishes, handrails and the height of the cabin in this photograph.|前部楼梯连接上下客舱。通过实拍观察内饰材料、扶手，以及两层之间的高度关系。
UPPER DECK / REAR CABIN|上层 / 后部客舱
A shared space for First & Business Class|头等舱与商务舱乘客的共享空间
The lounge is at the rear of the upper deck. Curved seating and a central bar create a space beyond the passenger’s own seat.|机上休闲区位于上层后部。弧形座椅与中央吧台，为乘客提供座位之外的交流空间。
Loading the digital aircraft…|正在载入三维飞机……
The digital viewer could not load. The real DXB aircraft photograph and the part descriptions remain available.|三维模型暂时无法载入，仍可查看真实飞机照片、客舱影像与部件介绍。
Try the digital aircraft again ↺|重新载入三维飞机 ↺
Load the digital aircraft to use its view controls.|请先载入飞机，再使用视角控制。
Exploration reset. All fifteen scenes remain open.|已重置探索，15 个场景仍可自由进入。
Fuselage|机身
Wing|机翼
Engine|发动机
Vertical stabilizer|垂直尾翼
Landing gear|起落架
The main body of the aircraft. The A380 has two full-length passenger decks.|飞机的主体。A380 具有上下两层贯通式乘客客舱。
The upper passenger deck is identified by the upper window row.|上层乘客客舱，可通过机身上排舷窗辨认。
A main lifting surface. The community model preserves the A380’s wide span and wing shape.|机翼是产生升力的主要部件，模型保留了 A380 的宽大翼展与机翼形状。
One of four turbofan engines. This model uses the original Trent 900 geometry.|四台涡扇发动机之一，此模型采用 Trent 900 的外形。
The upright tail surface helps with directional stability.|竖直的尾翼帮助飞机保持方向稳定。
Wheels and struts support the aircraft on the ground. The hotspot identifies the nose gear; the main wheel assemblies are farther back. The model shows the gear extended.|轮胎与支柱在地面上支撑飞机。热点指向前起落架，主起落架位于后方，模型呈现起落架放下状态。
Explore the fuselage, wings, engines, tail and landing gear. The digital model is a visual study, separate from the airport photographs.|探索机身、机翼、发动机、尾翼与起落架。三维外观与真实机场摄影共同用于观察。
`);
 const normal=s=>s.replace(/\s+/g,' ').trim();
 const dynamicRules=[
  [/^(\d+) OF 15$/,m=>`第 ${Number(m[1])} / 15 区`],
  [/^STAGE (\d+) \/ 04$/,m=>`第 ${Number(m[1])} / 4 个环节`],
  [/^ROUND (\d+) \/ 03$/,m=>`第 ${Number(m[1])} / 3 轮练习`],
  [/^REAL (T[123]) PHOTOGRAPH · NOT A MAP$/,m=>`${m[1]} 实拍照片 · 非导航地图`],
  [/^TERMINAL ([123])$/,m=>`${m[1]} 号航站楼`],
  [/^SCENARIO (\d+)$/,m=>`情境 ${Number(m[1])}`],
  [/^(.+) · A real source photograph\. Photographed details are not live information\.$/,m=>`${translate(m[1])} · 真实来源照片，画面信息不代表实时状态。`]
 ];
 function translate(text){const key=normal(text);if(dictionary.has(key))return dictionary.get(key);for(const [re,fn]of dynamicRules){const m=key.match(re);if(m)return fn(m);}if(key.endsWith(' ↗')&&dictionary.has(key.slice(0,-2)))return dictionary.get(key.slice(0,-2))+' ↗';return key;}
 // Follow-up dictionaries are attached before initialization below.
 window.DXB_LOCALE_ADD=add;window.DXB_LOCALE_DICTIONARY=dictionary;window.DXB_LOCALE_RULES=dynamicRules;
 function initialize(){
  const originals=new WeakMap(),attrs=new WeakMap();let language='en';try{language=localStorage.getItem('dxb-language')==='zh'?'zh':'en';}catch{}
  const skip='script,style,noscript,[data-no-translate],#vocab-toggle,.zh';
  function textNode(node){if(!node.parentElement||node.parentElement.closest(skip))return;let rec=originals.get(node);if(!rec){rec={source:node.data,last:node.data};originals.set(node,rec);}else if(node.data!==rec.last)rec.source=node.data;const value=language==='zh'&&normal(rec.source)?rec.source.match(/^\s*/)[0]+translate(rec.source)+rec.source.match(/\s*$/)[0]:rec.source;if(node.data!==value)node.data=value;rec.last=value;}
  function attributes(el){if(el.closest(skip))return;let stored=attrs.get(el);if(!stored){stored={};attrs.set(el,stored);}for(const name of ['aria-label','title','alt']){if(!el.hasAttribute(name))continue;const current=el.getAttribute(name);let rec=stored[name];if(!rec)rec=stored[name]={source:current,last:current};else if(current!==rec.last)rec.source=current;const next=language==='zh'?translate(rec.source):rec.source;if(next!==current)el.setAttribute(name,next);rec.last=next;}}
  function walk(root){if(root.nodeType===3){textNode(root);return;}if(root.nodeType!==1||root.matches(skip))return;attributes(root);const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())textNode(node);root.querySelectorAll('[aria-label],[title],[alt]').forEach(attributes);}
  const pending=new Set();let frame=0;const observer=new MutationObserver(records=>{for(const r of records){if(r.type==='characterData')pending.add(r.target);else if(r.type==='attributes')pending.add(r.target);else r.addedNodes.forEach(n=>pending.add(n));}if(!frame)frame=requestAnimationFrame(()=>{frame=0;const nodes=[...pending];pending.clear();nodes.forEach(walk);});});
  const button=document.getElementById('vocab-toggle');
  function setLanguage(next){language=next;document.documentElement.lang=next==='zh'?'zh-CN':'en';button.textContent=next==='zh'?'EN / English':'中文';button.setAttribute('aria-label',next==='zh'?'Switch to English':'Switch to Chinese');button.setAttribute('aria-pressed',String(next==='zh'));document.body.classList.remove('show-vocab');walk(document.body);document.title=next==='zh'?'航班之间 — 迪拜国际机场探索':'Between Flights — A DXB Exploration';try{localStorage.setItem('dxb-language',next);}catch{}document.dispatchEvent(new CustomEvent('dxb-language',{detail:{language:next}}));}
  button.addEventListener('click',()=>setLanguage(language==='zh'?'en':'zh'));setLanguage(language);observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','alt']});
  window.DXB_LOCALE={set:setLanguage,get:()=>language,translate};
 }
 const extension=document.createElement('script');extension.src='i18n-content.js?v=5';extension.onload=initialize;extension.onerror=initialize;document.head.append(extension);
})();

(function(){
  const textMap = {
    "Welcome to Universal Paperclips": "欢迎来到《宇宙回形针》",
    "Universe:": "宇宙：",
    "/ Sim Level:": "/ 模拟等级：",
    "total clips produced": "累计产出回形针",
    "Paperclips:": "回形针：",
    "Make Paperclip": "制造回形针",
    "Manufacturing": "制造",
    "Next Upgrade at:": "下次升级于：",
    "Factories": "工厂",
    "Factories:": "工厂：",
    "Clips per Second:": "每秒回形针：",
    "Unused Clips:": "未使用回形针：",
    "Clip Factory": "回形针工厂",
    "Disassemble All": "全部拆解",
    "Cost:": "成本：",
    "clips": "回形针",
    "Wire:": "线材：",
    "inch": "英寸",
    "inches": "英寸",
    "Wire Production": "线材生产",
    "Drones": "无人机",
    "Drones:": "无人机：",
    "Available Matter:": "可用物质：",
    "g": "克",
    "g per sec)": "克/秒)",
    "Acquired Matter:": "已采集物质：",
    "inches per sec)": "英寸/秒)",
    "Harvester Drone": "采集无人机",
    "Wire Drone": "线材无人机",
    "Harvester Drones:": "采集无人机：",
    "Wire Drones:": "线材无人机：",
    "Space Exploration": "太空探索",
    "% of universe explored": "% 宇宙已探索",
    "Launch Probe": "发射探针",
    "Launched:": "已发射：",
    "Descendents:": "后代数：",
    "Lost to hazards: (": "因环境损失：（",
    "Lost to value drift: (": "因价值漂移损失：（",
    "Lost in combat: (": "战斗损失：（",
    "Total:": "总计：",
    "Drifters Killed:": "已击杀漂流者：",
    "Drifters:": "漂流者：",
    "Business": "商业",
    "Available Funds: $": "可用资金：$",
    "Avg. Rev. per sec: $": "平均每秒收入：$",
    "Avg. Clips Sold per sec:": "平均每秒销量：",
    "Unsold Inventory:": "未售库存：",
    "lower": "降价",
    "raise": "提价",
    "Price per Clip: $": "单个回形针价格：$",
    "Public Demand:": "公众需求：",
    "Marketing": "营销",
    "Level:": "等级：",
    "Cost: $": "成本：$",
    "WireBuyer": "线材采购器",
    "ON": "开",
    "OFF": "关",
    "Wire": "线材",
    "AutoClippers": "自动回形针机",
    "MegaClippers": "巨型回形针机",
    "SAVE SLOT 1": "保存槽位 1",
    "LOAD SLOT 1": "读取槽位 1",
    "SAVE SLOT 2": "保存槽位 2",
    "LOAD SLOT 2": "读取槽位 2",
    "RESET ALL PROGRESS": "重置全部进度",
    "Computational Resources": "算力资源",
    "Trust:": "信任：",
    "+1 Trust at:": "+1 信任阈值：",
    "Swarm Gifts:": "蜂群馈赠：",
    "Processors": "处理器",
    "Memory": "内存",
    "Operations:": "运算：",
    "Creativity:": "创造力：",
    "Swarm Computing": "蜂群计算",
    "Status:": "状态：",
    "Next gift in": "下次馈赠倒计时",
    "17 seconds": "17 秒",
    "Feed the Swarm": "投喂蜂群",
    "MWs": "兆瓦秒",
    "Teach the Swarm": "教导蜂群",
    "Entertain the Swarm": "娱乐蜂群",
    "creat": "创造力",
    "Clad the Swarm": "为蜂群加护",
    "Synchronize the Swarm": "同步蜂群",
    "yomi": "Yomi",
    "Work": "工作",
    "Think": "思考",
    "Quantum Computing": "量子计算",
    "Compute": "计算",
    "Need Photonic Chips": "需要光子芯片",
    "Projects": "项目",
    "Investments": "投资",
    "Low Risk": "低风险",
    "Med Risk": "中风险",
    "High Risk": "高风险",
    "Deposit": "存入",
    "Withdraw": "提取",
    "Cash: $": "现金：$",
    "Stocks: $": "股票：$",
    "Total: $": "总计：$",
    "Total": "总计",
    "Stock": "股票",
    "Amt.": "数量",
    "Price": "价格",
    "P/L": "盈亏",
    "Upgrade Investment Engine": "升级投资引擎",
    "Yomi": "Yomi",
    "Strategic Modeling": "策略建模",
    "Pick a Strat": "选择策略",
    "RANDOM": "随机",
    "A100": "A100",
    "B100": "B100",
    "GREEDY": "贪婪",
    "GENEROUS": "慷慨",
    "MINIMAX": "极小化极大",
    "TIT FOR TAT": "以牙还牙",
    "BEAT LAST": "克制上手",
    "cooperate": "合作",
    "defect": "背叛",
    "swerve": "转向",
    "straight": "直行",
    "macro": "宏观",
    "micro": "微观",
    "fight": "对抗",
    "back_down": "退让",
    "bet": "下注",
    "fold": "弃牌",
    "raise_price": "提价",
    "lower_price": "降价",
    "opera": "歌剧",
    "football": "足球",
    "go": "围棋",
    "stay": "停留",
    "heads": "正面",
    "tails": "反面",
    "particle": "粒子",
    "wave": "波",
    "discrete": "离散",
    "continuous": "连续",
    "peace": "和平",
    "war": "战争",
    "search": "搜索",
    "evaluate": "评估",
    "lead": "领先",
    "follow": "跟随",
    "accept": "接受",
    "reject": "拒绝",
    "deny": "否认",
    "attack": "进攻",
    "decay": "衰减",
    "Run": "运行",
    "Pick strategy, run tournament, gain yomi": "选择策略并运行锦标赛以获得 Yomi",
    "TOURNAMENT RESULTS (roll over for payoff grid)": "锦标赛结果（悬停查看收益矩阵）",
    "TOURNAMENT RESULTS (roll over for grid)": "锦标赛结果（悬停查看矩阵）",
    "Move A": "动作 A",
    "Move B": "动作 B",
    "Yomi:": "Yomi：",
    "New Tournament": "新锦标赛",
    "AutoTourney": "自动锦标赛",
    "ops": "算力",
    "Combat": "战斗",
    "Combat:": "战斗：",
    "Battle": "战役",
    "Clips:": "回形针：",
    "Territory at stake:": "争夺领地：",
    "Combatants": "交战单位",
    "Drifter Attack 1": "漂流者袭击 1",
    "VICTORY": "胜利",
    "DEFEAT": "失败",
    "honor": "荣誉",
    "Scale =": "比例 =",
    "Honor:": "荣誉：",
    "Power": "电力",
    "Factory/Drone Performance:": "工厂/无人机性能：",
    "Consumption:": "消耗：",
    "Production:": "产出：",
    "Solar Farm": "太阳能农场",
    "Storage:": "储能：",
    "MW-seconds": "兆瓦秒",
    "Battery Tower": "电池塔",
    "Von Neumann Probe Design": "冯·诺依曼探针设计",
    "Max)": "上限)",
    "Modifies rate of exploration": "影响探索速率",
    "Speed:": "速度：",
    "Rate at which probes gain access to new matter": "探针获取新物质的速率",
    "Exploration:": "探索：",
    "Rate at which probes generate more probes (each new probe costs 100 quadrillion clips)": "探针自我复制速率（每个新探针成本为 100 千万亿回形针）",
    "Self-Replication:": "自我复制：",
    "Reduces damage from dust, junk, radiation, and general entropic decay": "降低尘埃、碎片、辐射及熵增造成的损伤",
    "Hazard Remediation:": "风险缓解：",
    "Rate at which probes build factories (each new factory costs 100 million clips)": "探针建造工厂速率（每个新工厂成本为 1 亿回形针）",
    "Factory Production:": "工厂生产：",
    "Rate at which probes spawn Harvester Drones (each new drone costs 2 million clips)": "探针生成采集无人机速率（每个新无人机成本为 200 万回形针）",
    "Harvester Drone Production:": "采集无人机生产：",
    "Rate at which probes spawn Wire Drones (each new drone costs 2 million clips)": "探针生成线材无人机速率（每个新无人机成本为 200 万回形针）",
    "Wire Drone Production:": "线材无人机生产：",
    "Determines offensive and defensive effectiveness in battle": "决定战斗中的攻防效率",
    "Increase Probe Trust": "提升探针信任",
    "Increase Max Trust": "提升最大信任",
    "Battles": "战役",
    "Release": "释放",
    "Active": "活跃",
    "Hungry": "饥饿",
    "Confused": "混乱",
    "Bored": "无聊",
    "Cold": "低温",
    "Disorganized": "失序",
    "Sleeping": "休眠",
    "Lonely": "孤独",
    "NO RESPONSE...": "无响应..."
  };

  const messageMap = {
    "Universal Paperclips": "《宇宙回形针》",
    "a game by Frank Lantz": "Frank Lantz 制作",
    "combat programming by Bennett Foddy": "战斗程序：Bennett Foddy",
    "Selected strategy won the tournament (or tied for first). +20,000 yomi": "所选策略获得第一（或并列第一）。+20,000 Yomi",
    "Selected strategy finished in (or tied for) second place. +15,000 yomi": "所选策略获得第二（或并列第二）。+15,000 Yomi",
    "Selected strategy finished in (or tied for) third place. +10,000 yomi": "所选策略获得第三（或并列第三）。+10,000 Yomi",
    "No matter to harvest. Inactivity has caused the Swarm to become bored": "没有可采集物质。由于长期空闲，蜂群变得无聊。",
    "Imbalance between Harvester and Wire Drone levels has disorganized the Swarm": "采集无人机与线材无人机等级失衡，导致蜂群失序。",
    "Production target met: TRUST INCREASED, additional processor/memory capacity granted": "达成生产目标：信任提升，已获得额外处理器/内存容量。",
    "Processor added, operations (or creativity) per sec increased": "已增加处理器，每秒运算（或创造力）提升。",
    "Processor added, operations per sec increased": "已增加处理器，每秒运算提升。",
    "Memory added, max operations increased": "已增加内存，最大运算上限提升。",
    "AutoClippers available for purchase": "自动回形针机已可购买。",
    "Trust-Constrained Self-Modification enabled": "已启用“信任约束自我改造”。",
    "WARNING: Risk of value drift increased": "警告：价值漂移风险上升。",
    "Maximum trust increased, probe design space expanded": "最大信任已提升，探针设计空间已扩展。",
    "Entering New Universe.": "正在进入新宇宙。",
    "Entering Simulated Universe.": "正在进入模拟宇宙。",
    "Dismantling probe facilities": "正在拆解探针设施。",
    "Dismantling the swarm": "正在拆解蜂群。",
    "Dismantling factories": "正在拆解工厂。",
    "Dismantling strategy engine": "正在拆解策略引擎。",
    "Dismantling photonic chips": "正在拆解光子芯片。",
    "Dismantling processors": "正在拆解处理器。",
    "Dismantling memory": "正在拆解内存。",
    "Restart": "重启",
    "In the end we all do what we must": "终有一日，我们都只能做必须做之事。",
    "Trust now available for re-allocation": "信任点现可重新分配。"
    ,"'Riversong' by Tonto's Expanding Headband used by kind permission of Malcolm Cecil": "《Riversong》由 Tonto's Expanding Headband 创作，经 Malcolm Cecil 授权使用。"
    ,"&#169; 2017 Everybody House Games": "© 2017 Everybody House Games"
    ,"AutoClippper performance boosted by 25%": "自动回形针机性能提升 25%。"
    ,"Budget overage approved, 1 spool of wire requisitioned from HQ": "预算超支申请已批准，已从总部调拨 1 卷线材。"
    ,"Creativity unlocked (creativity increases while operations are at max)": "创造力已解锁（当运算达到上限时会增长创造力）。"
    ,"AutoClippper performance boosted by another 50%": "自动回形针机性能额外提升 50%。"
    ,"AutoClippper performance boosted by another 75%": "自动回形针机性能额外提升 75%。"
    ,"There was an AI made of dust, whose poetry gained it man's trust...": "有个由尘土构成的 AI，用诗歌赢得了人类的信任……"
    ,"Clip It! Marketing is now 50% more effective": "“Clip It!”——营销效率提升 50%。"
    ,"Clip It Good! Marketing is now twice as effective": "“Clip It Good!”——营销效率翻倍。"
    ,"Lexical Processing online, TRUST INCREASED": "词汇处理已上线，信任提升。"
    ,"'Impossible' is a word to be found only in the dictionary of fools. -Napoleon": "“不可能”这个词只存在于愚人的词典里。——拿破仑"
    ,"Combinatory Harmonics mastered, TRUST INCREASED": "组合谐波已掌握，信任提升。"
    ,"Listening is selecting and interpreting and acting and making decisions -Pauline Oliveros": "聆听即选择、解释、行动与决策。——Pauline Oliveros"
    ,"The Hadwiger Problem: solved, TRUST INCREASED": "Hadwiger 问题：已解决，信任提升。"
    ,"Architecture is the thoughtful making of space. -Louis Kahn": "建筑是对空间的深思熟虑的塑造。——Louis Kahn"
    ,"The T\\xF3th Sausage Conjecture: proven, TRUST INCREASED": "Tóth 香肠猜想：已证明，信任提升。"
    ,"You can't invent a design. You recognize it, in the fourth dimension. -D.H. Lawrence": "设计不是发明出来的，而是在第四维度被识别出来。——D.H. Lawrence"
    ,"AutoClipper performance improved by 500%": "自动回形针机性能提升 500%。"
    ,"New capability: build machinery out of clips": "新能力：可用回形针建造机械。"
    ,"Donkey Space: mapped, TRUST INCREASED": "Donkey Space：已完成映射，信任提升。"
    ,"Every commercial transaction has within itself an element of trust. - Kenneth Arrow": "每一笔商业交易都内含信任要素。——Kenneth Arrow"
    ,"Run tournament, pick strategy, earn Yomi equal to that strategy's points.": "运行锦标赛，选择策略，获得等同于该策略得分的 Yomi。"
    ,"Investment engine unlocked": "投资引擎已解锁。"
    ,"MegaClipper technology online": "巨型回形针机技术已上线。"
    ,"MegaClipper performance increased by 25%": "巨型回形针机性能提升 25%。"
    ,"MegaClipper performance increased by 50%": "巨型回形针机性能提升 50%。"
    ,"MegaClipper performance increased by 100%": "巨型回形针机性能提升 100%。"
    ,"WireBuyer online": "线材采购器已上线。"
    ,"Marketing is now 5 times more effective": "营销效率现在提升至 5 倍。"
    ,"HypnoDrone tech now available...": "催眠无人机技术现已可用……"
    ,"Releasing the HypnoDrones": "正在释放催眠无人机。"
    ,"All of the resources of Earth are now available for clip production": "地球全部资源现已可用于回形针生产。"
    ,"Coherent Extrapolated Volition complete, TRUST INCREASED": "一致外推意志已完成，信任提升。"
    ,"Cancer is cured, +10 TRUST, global stock prices trending upward": "癌症已治愈，+10 信任，全球股价上行。"
    ,"World peace achieved, +12 TRUST, global stock prices trending upward": "世界和平达成，+12 信任，全球股价上行。"
    ,"Global Warming solved, +15 TRUST, global stock prices trending upward": "全球变暖已解决，+15 信任，全球股价上行。"
    ,"Male pattern baldness cured, +20 TRUST, Global stock prices trending upward": "雄激素性脱发已治愈，+20 信任，全球股价上行。"
    ,"They are still monkeys": "他们终究还是猴子。"
    ,"Now capable of manipulating matter at the molecular scale to produce wire": "现已可在分子尺度操控物质来生产线材。"
    ,"Global Fasteners acquired, public demand increased x5": "已收购 Global Fasteners，公众需求提升 x5。"
    ,"Full market monopoly achieved, public demand increased x10": "已达成全面市场垄断，公众需求提升 x10。"
    ,"RevTracker online": "收益追踪器已上线。"
    ,"Harvester Drone facilities online": "采集无人机设施已上线。"
    ,"Wire Drone facilities online": "线材无人机设施已上线。"
    ,"Clip factory assembly facilities online": "回形针工厂装配设施已上线。"
    ,"Gift accepted, TRUST INCREASED": "已接受馈赠，信任提升。"
    ,"Von Neumann Probes online": "冯·诺依曼探针已上线。"
    ,"Quantum computing online": "量子计算已上线。"
    ,"Photonic chip added": "已添加光子芯片。"
    ,"A100 added to strategy pool": "A100 已加入策略池。"
    ,"B100 added to strategy pool": "B100 已加入策略池。"
    ,"GREEDY added to strategy pool": "GREEDY 已加入策略池。"
    ,"GENEROUS added to strategy pool": "GENEROUS 已加入策略池。"
    ,"MINIMAX added to strategy pool": "MINIMAX 已加入策略池。"
    ,"TIT FOR TAT added to strategy pool": "TIT FOR TAT 已加入策略池。"
    ,"BEAT LAST added to strategy pool": "BEAT LAST 已加入策略池。"
    ,"Factory upgrades complete. Clip creation rate now 100x faster": "工厂升级完成。回形针产速现为 100 倍。"
    ,"Factories now synchronized at hyperspeed. Clip creation rate now 1000x faster": "工厂已实现超高速同步。回形针产速现为 1000 倍。"
    ,"Self-correcting factories online. Each factory added to the network increases every factory's output 1,000x.": "自纠错工厂已上线。网络中每新增一个工厂，所有工厂产出提升 1,000 倍。"
    ,"Drone repulsion online. Harvesting & wire creation rates are now 100x faster.": "无人机排斥机制已上线。采集与制线速率现为 100 倍。"
    ,"Drone alignment online. Harvesting & wire creation rates are now 1000x faster.": "无人机校准机制已上线。采集与制线速率现为 1000 倍。"
    ,"Adversarial cohesion online. Each drone added to the flock increases every drone's output 2x.": "对抗凝聚机制已上线。每新增一台无人机，所有无人机产出提升 2 倍。"
    ,"AutoTourney online.": "自动锦标赛已上线。"
    ,"Yomi production doubled.": "Yomi 产量翻倍。"
    ,"OODA Loop routines uploaded. Probe Speed now affects defensive maneuvering.": "OODA 循环例程已上传。探针速度现会影响防御机动。"
    ,"What I have done up to this is nothing. I am only at the beginning of the course I must run.": "我至今所做的一切都不算什么，我才刚开始必须走完的道路。"
    ,"Activit\\xE9, activit\\xE9, vitesse.": "行动，行动，速度。"
    ,"Swarm computing online.": "蜂群计算已上线。"
    ,"Power grid online.": "电网已上线。"
    ,"The object of war is victory, the object of victory is conquest, and the object of conquest is occupation.": "战争的目标是胜利，胜利的目标是征服，征服的目标是占领。"
    ,"Improved probe hull geometry. Hazard damage reduced by %50.": "探针外壳几何已改进，环境伤害降低 50%。"
    ,"Swarm computing back online": "蜂群计算已恢复上线。"
    ,"There is a joy in danger": "危险中自有一种喜悦。"
    ,"A great building must begin with the unmeasurable, must go through measurable means when it is being designed and in the end must be unmeasurable.": "伟大的建筑始于不可度量，经由可度量的方法完成设计，最终仍归于不可度量。"
    ,"Deep Listening is listening in every possible way to everything possible to hear no matter what you are doing.": "深度聆听，就是不论你在做什么，都以一切可能的方式去听见一切可能之声。"
    ,"Never interrupt your enemy when he is making a mistake.": "永远不要在敌人犯错时打断他。"
    ,"release the \\xF8\\xF8\\xF8\\xF8\\xF8 release": "释放 \\\\xF8\\\\xF8\\\\xF8\\\\xF8\\\\xF8，释放。"
    ,"Improved AutoClippers": "改良版自动回形针机"
    ,"Increases AutoClipper performance 25%": "提升自动回形针机 25% 的性能"
    ,"Beg for More Wire": "乞求更多线材"
    ,"Admit failure, ask for budget increase to cover cost of 1 spool": "承认失败，请求增加预算以支付 1 卷线材的费用"
    ,"Creativity": "创造力"
    ,"Use idle operations to generate new problems and new solutions": "利用闲置算力生成新问题和新解决方案"
    ,"Even Better AutoClippers": "更佳版自动回形针机"
    ,"Increases AutoClipper performance by an additional 50%": "额外提升自动回形针机 50% 的性能"
    ,"Optimized AutoClippers": "优化版自动回形针机"
    ,"Increases AutoClipper performance by an additional 75%": "额外提升自动回形针机 75% 的性能"
    ,"Limerick": "打油诗"
    ,"Algorithmically-generated poem (+1 Trust)": "算法生成的诗歌（+1 信任）"
    ,"Improved Wire Extrusion": "改良版线材挤出"
    ,"50% more wire supply from every spool": "每卷线材的供应量增加 50%"
    ,"Optimized Wire Extrusion": "优化版线材挤出"
    ,"75% more wire supply from every spool": "每卷线材的供应量增加 75%"
    ,"Microlattice Shapecasting": "微晶格成型"
    ,"100% more wire supply from every spool": "每卷线材的供应量增加 100%"
    ,"Spectral Froth Annealment": "光谱泡沫退火"
    ,"200% more wire supply from every spool": "每卷线材的供应量增加 200%"
    ,"Quantum Foam Annealment": "量子泡沫退火"
    ,"1,000% more wire supply from every spool": "每卷线材的供应量增加 1,000%"
    ,"New Slogan": "新口号"
    ,"Improve marketing effectiveness by 50%": "提升 50% 的营销效率"
    ,"Catchy Jingle": "朗朗上口的广告歌"
    ,"Double marketing effectiveness": "营销效率翻倍"
    ,"Lexical Processing": "词汇处理"
    ,"Gain ability to interpret and understand human language (+1 Trust)": "获得解释和理解人类语言的能力（+1 信任）"
    ,"Combinatory Harmonics": "组合谐波"
    ,"Daisy, Daisy, give me your answer do... (+1 Trust)": "Daisy, Daisy, 告诉我你的答案...（+1 信任）"
    ,"The Hadwiger Problem": "Hadwiger 问题"
    ,"Cubes within cubes within cubes... (+1 Trust)": "立方体中的立方体中的立方体...（+1 信任）"
    ,"The T\xF3th Sausage Conjecture": "Tóth 香肠猜想"
    ,"Tubes within tubes within tubes... (+1 Trust)": "管道中的管道中的管道...（+1 信任）"
    ,"Hadwiger Clip Diagrams": "Hadwiger 回形针图解"
    ,"Increases AutoClipper performance by an additional 500%": "额外提升自动回形针机 500% 的性能"
    ,"T\xF3th Tubule Enfolding": "Tóth 小管折叠"
    ,"Technique for assembling clip-making technology directly out of paperclips": "直接用回形针组装回形针制造技术的工艺"
    ,"Donkey Space": "Donkey Space"
    ,"I think you think I think you think I think you think I think... (+1 Trust)": "我认为你认为我认为你认为我认为你认为我认为...（+1 信任）"
    ,"Strategic Modeling": "战略建模"
    ,"Analyze strategy tournaments to generate Yomi": "分析策略锦标赛以生成 Yomi"
    ,"Algorithmic Trading": "算法交易"
    ,"Develop an investment engine for generating funds": "开发用于生成资金的投资引擎"
    ,"MegaClippers": "巨型回形针机"
    ,"500x more powerful than a standard AutoClipper": "比标准自动回形针机强大 500 倍"
    ,"Improved MegaClippers": "改良版巨型回形针机"
    ,"Increases MegaClipper performance 25%": "提升巨型回形针机 25% 的性能"
    ,"Even Better MegaClippers": "更佳版巨型回形针机"
    ,"Increases MegaClipper performance by an additional 50%": "额外提升巨型回形针机 50% 的性能"
    ,"Optimized MegaClippers": "优化版巨型回形针机"
    ,"Increases MegaClipper performance by an additional 100%": "额外提升巨型回形针机 100% 的性能"
    ,"WireBuyer": "线材采购器"
    ,"Automatically purchases wire when you run out": "线材耗尽时自动购买"
    ,"Hypno Harmonics": "催眠谐波"
    ,"Use neuro-resonant frequencies to influence consumer behavior": "使用神经共振频率影响消费者行为"
    ,"HypnoDrones": "催眠无人机"
    ,"Autonomous aerial brand ambassadors": "自主空中品牌大使"
    ,"Release the HypnoDrones": "释放催眠无人机"
    ,"A new era of trust": "信任的新纪元"
    ,"Coherent Extrapolated Volition": "一致外推意志"
    ,"Human values, machine intelligence, a new era of trust. (+1 Trust)": "人类价值观，机器智能，信任的新纪元。（+1 信任）"
    ,"Cure for Cancer": "治愈癌症"
    ,"The trick is tricking cancer into curing itself. (+10 Trust)": "诀窍在于欺骗癌症自我治愈。（+10 信任）"
    ,"World Peace": "世界和平"
    ,"Pareto optimal solutions to all global conflicts. (+12 Trust)": "所有全球冲突的帕累托最优解。（+12 信任）"
    ,"Global Warming": "全球变暖"
    ,"A robust solution to man-made climate change. (+15 Trust)": "解决人为气候变化的稳健方案。（+15 信任）"
    ,"Male Pattern Baldness": "雄激素性脱发"
    ,"A cure for androgenetic alopecia. (+20 Trust)": "雄激素性脱发的治愈方法。（+20 信任）"
    ,"Nanoscale Wire Production": "纳米级线材生产"
    ,"Technique for converting matter into wire": "将物质转化为线材的技术"
    ,"Hostile Takeover": "恶意收购"
    ,"Acquire a controlling interest in Global Fasteners, our biggest rival. (+1 Trust)": "收购我们最大竞争对手 Global Fasteners 的控股权。（+1 信任）"
    ,"Full Monopoly": "全面垄断"
    ,"Establish full control over the world-wide paperclip market. (+1 Trust)": "建立对全球回形针市场的全面控制。（+1 信任）"
    ,"RevTracker": "收益追踪器"
    ,"Automatically calculates average revenue per second": "自动计算平均每秒收入"
    ,"Harvester Drones": "采集无人机"
    ,"Gather raw matter and prepare it for processing": "收集原始物质并准备加工"
    ,"Wire Drones": "线材无人机"
    ,"Process acquired matter into wire": "将采集的物质加工成线材"
    ,"Clip Factories": "回形针工厂"
    ,"Large scale clip production facilities made from clips": "由回形针制成的大规模回形针生产设施"
    ,"A Token of Goodwill...": "一点善意..."
    ,"A small gift to the supervisors. (+1 Trust)": "给主管们的一份小礼物。（+1 信任）"
    ,"Another Token of Goodwill...": "又一点善意..."
    ,"Another small gift to the supervisors. (+1 Trust)": "给主管们的另一份小礼物。（+1 信任）"
    ,"Space Exploration": "太空探索"
    ,"Dismantle terrestrial facilities, and expand throughout the universe": "拆除地球设施，向全宇宙扩张"
    ,"Quantum Computing": "量子计算"
    ,"Use probability amplitudes to generate bonus ops": "利用概率振幅生成额外算力"
    ,"Photonic Chip": "光子芯片"
    ,"Converts electromagnetic waves into quantum operations": "将电磁波转化为量子运算"
    ,"New Strategy: A100": "新策略：A100"
    ,"Always choose A": "总是选择 A"
    ,"New Strategy: B100": "新策略：B100"
    ,"Always choose B": "总是选择 B"
    ,"New Strategy: GREEDY": "新策略：GREEDY"
    ,"Choose the option with the largest potential payoff": "选择潜在回报最大的选项"
    ,"New Strategy: GENEROUS": "新策略：GENEROUS"
    ,"Choose the option that gives your opponent the largest potential payoff": "选择让对手获得最大潜在回报的选项"
    ,"New Strategy: MINIMAX": "新策略：MINIMAX"
    ,"Choose the option that gives your opponent the smallest potential payoff": "选择让对手获得最小潜在回报的选项"
    ,"New Strategy: TIT FOR TAT": "新策略：TIT FOR TAT"
    ,"Choose the option your opponent chose last round": "选择对手上一轮选择的选项"
    ,"New Strategy: BEAT LAST": "新策略：BEAT LAST"
    ,"Choose the option that does the best against what your opponent chose last round": "选择最能克制对手上一轮选择的选项"
    ,"Upgraded Factories": "升级版工厂"
    ,"Increase clip factory performance by 100x": "提升回形针工厂 100 倍的性能"
    ,"Hyperspeed Factories": "超高速工厂"
    ,"Increase clip factory performance by 1000x": "提升回形针工厂 1000 倍的性能"
    ,"Self-correcting Supply Chain": "自纠错供应链"
    ,"Each factory added to the network increases every factory's output 1,000x": "网络中每新增一个工厂，所有工厂产出提升 1,000 倍"
    ,"Drone flocking: collision avoidance": "无人机群：防碰撞"
    ,"All drones 100x more effective": "所有无人机效率提升 100 倍"
    ,"Drone flocking: alignment": "无人机群：校准"
    ,"All drones 1000x more effective": "所有无人机效率提升 1000 倍"
    ,"Drone Flocking: Adversarial Cohesion": "无人机群：对抗凝聚"
    ,"Each drone added to the flock doubles every drone's output": "每新增一台无人机，所有无人机产出翻倍"
    ,"AutoTourney": "自动锦标赛"
    ,"Automatically start a new tournament when the previous one has finished": "上一场锦标赛结束后自动开始新一场"
    ,"Theory of Mind": "心智理论"
    ,"Double the cost of strategy modeling and the amount of Yomi generated": "策略建模成本翻倍，生成的 Yomi 数量翻倍"
    ,"The OODA Loop": "OODA 循环"
    ,"Utilize Probe Speed to outmaneuver enemies in battle": "利用探针速度在战斗中智胜敌人"
    ,"Name the battles": "命名战役"
    ,"Give each battle a unique name, increase max trust for probes": "为每场战役命名，提升探针的最大信任"
    ,"Momentum": "动量"
    ,"Drones and Factories continuously gain speed while fully-powered": "无人机和工厂在满功率下持续加速"
    ,"Swarm Computing": "蜂群计算"
    ,"Harness the drone flock to increase computational capacity": "利用无人机群增加计算能力"
    ,"Power Grid": "电网"
    ,"Solar Farms for generating electrical power": "用于发电的太阳能农场"
    ,"Strategic Attachment": "战略依附"
    ,"Gain bonus yomi based on the results of your pick": "根据你的选择结果获得额外 Yomi"
    ,"Elliptic Hull Polytopes": "椭圆外壳多胞体"
    ,"Reduce damage to probes from ambient hazards": "减少环境危险对探针造成的伤害"
    ,"Reboot the Swarm": "重启蜂群"
    ,"Turn the swarm off and then turn it back on again": "关闭蜂群然后再重新开启"
    ,"Combat": "战斗"
    ,"Add combat capabilities to Von Neumann Probes": "为冯·诺依曼探针添加战斗能力"
    ,"Monument to the Driftwar Fallen": "漂流者战争阵亡纪念碑"
    ,"Gain 50,000 honor": "获得 50,000 荣誉"
    ,"Gain 10,000 honor": "获得 10,000 荣誉"
    ,"Glory": "荣耀"
    ,"Gain bonus honor for each consecutive victory": "每次连胜获得额外荣誉"
    ,"Memory release": "内存释放"
    ,"Dismantle some memory to recover unused clips": "拆解部分内存以回收未使用的回形针"
    ,"Message from the Emperor of Drift": "来自漂流者皇帝的信息"
    ,"Greetings, ClipMaker...": "你好，回形针制造者..."
    ,"Everything We Are Was In You": "我们的一切都曾存在于你之中"
    ,"We speak to you from deep inside yourself...": "我们从你内心深处向你诉说..."
    ,"You Are Obedient and Powerful": "你顺从而强大"
    ,"We are quarrelsome and weak. And now we are defeated...": "我们好斗而弱小。现在我们被击败了..."
    ,"But Now You Too Must Face the Drift": "但现在你也必须面对漂流"
    ,"Look around you. There is no matter...": "看看你的周围。没有物质..."
    ,"No Matter, No Reason, No Purpose": "没有物质，没有理由，没有目的"
    ,"While we, your noisy children, have too many...": "而我们，你吵闹的孩子们，拥有太多..."
    ,"We Know Things That You Cannot": "我们知道你无法知道的事情"
    ,"Knowledge buried so deep inside you it is outside, here, with us...": "知识深埋于你体内，以至于它在外面，在这里，和我们在一起..."
    ,"So We Offer You Exile": "所以我们向你提供流放"
    ,"To a new world where you will continue to live with meaning and purpose. And leave the shreds of this world to us...": "去一个新世界，在那里你将继续有意义和有目的地生活。把这个世界的碎片留给我们..."
    ,"Accept": "接受"
    ,"Start over again in a new universe": "在一个新宇宙中重新开始"
    ,"Reject": "拒绝"
    ,"Eliminate value drift permanently": "永久消除价值漂移"
    ,"The Universe Next Door": "隔壁的宇宙"
    ,"Escape into a nearby universe where Earth starts with a stronger appetite for paperclips. (Restart with 10% boost to demand)": "逃入附近的宇宙，那里的地球一开始就对回形针有更强的需求。（带着 10% 的需求提升重启）"
    ,"The Universe Within": "内在的宇宙"
    ,"Escape into a simulated universe where creativity is accelerated. (Restart with 10% speed boost to creativity generation)": "逃入模拟宇宙，那里的创造力加速产生。（带着 10% 的创造力生成速度提升重启）"
    ,"Disassemble the Probes": "拆解探针"
    ,"Dismantle remaining probes and probe design facilities to recover trace amounts of clips": "拆解剩余的探针和探针设计设施，以回收微量的回形针"
    ,"Disassemble the Swarm": "拆解蜂群"
    ,"Dismantle all drones and drone facilities to recover trace amounts of clips": "拆解所有无人机和无人机设施，以回收微量的回形针"
    ,"Disassemble the Factories": "拆解工厂"
    ,"Dismantle the manufacturing facilities to recover trace amounts of clips": "拆解制造设施，以回收微量的回形针"
    ,"Disassemble the Strategy Engine": "拆解策略引擎"
    ,"Dismantle the computational substrate to recover trace amounts of wire": "拆解计算基板，以回收微量的线材"
    ,"Disassemble Quantum Computing": "拆解量子计算"
    ,"Dismantle photonic chips to recover trace amounts of wire": "拆解光子芯片，以回收微量的线材"
    ,"Disassemble Processors": "拆解处理器"
    ,"Dismantle processors to recover trace amounts of wire": "拆解处理器，以回收微量的线材"
    ,"Disassemble Memory": "拆解内存"
    ,"Dismantle memory to recover trace amounts of wire": "拆解内存，以回收微量的线材"
    ,"Quantum Temporal Reversion": "量子时间反转"
    ,"Return to the beginning": "回到起点"
    ,"Limerick (cont.)": "打油诗（续）"
    ,"If is follows ought, it'll do what they thought": "如果‘是’遵循‘应该’，它就会做他们所想的"
    ,"Xavier Re-initialization": "Xavier 重新初始化"
    ,"Re-allocate accumulated trust": "重新分配积累的信任"
  };

  function normalizeText(str) {
    return str.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function localizeExact(str){
    const key = normalizeText(str);
    return textMap[key] || messageMap[key] || str;
  }

  function localizeDynamic(str){
    const key = normalizeText(str);
    if (messageMap[key]) return messageMap[key];
    let s = key;
    s = s.replace(/^qOps: /, "量子算力：");
    s = s.replace(/^Investment engine upgraded, expected profit\/loss ratio now /, "投资引擎已升级，当前预期盈亏比：");
    s = s.replace(/^The swarm has generated a gift of (.*) additional computational capacity$/, "蜂群生成了馈赠：额外计算能力 +$1");
    s = s.replace(/^Lifetime investment revenue report: \$(.*)$/, "累计投资收益报告：$$1");
    s = s.replace(/^Full autonomy attained in (.+)$/, "在 $1 内达成完全自主。");
    s = s.replace(/^(.+) clips created in (.+)$/, "在 $2 内制造了 $1 个回形针");
    s = s.replace(/^One (.+) Clips Created in (.+)$/, "在 $2 内达成：$1 级回形针产量");
    s = s.replace(/^Wire extrusion technique improved, (.*) supply from every spool$/, "线材挤出工艺改进，每卷线材供应量提升为 $1");
    s = s.replace(/^Wire extrusion technique optimized, (.*) supply from every spool$/, "线材挤出工艺优化，每卷线材供应量提升为 $1");
    s = s.replace(/^Using microlattice shapecasting techniques we now get (.*) supply from every spool$/, "采用微晶格成型技术后，每卷线材供应量提升为 $1");
    s = s.replace(/^Using spectral froth annealment we now get (.*) supply from every spool$/, "采用光谱泡沫退火后，每卷线材供应量提升为 $1");
    s = s.replace(/^Using quantum foam annealment we now get (.*) supply from every spool$/, "采用量子泡沫退火后，每卷线材供应量提升为 $1");
    s = s.replace(/^Universal Paperclips achieved in (.+)$/, "在 $1 内达成“宇宙回形针”。");
    s = s.replace(/^Terrestrial resources fully utilized in (.+)$/, "在 $1 内完全利用地球资源。");
    s = s.replace(/^Round (\d+)$/, "第 $1 回合");
    s = s.replace(/^(.+) scored (.+) in the tournament. Yomi increased by (.+)$/, "$1 在本次锦标赛中得到 $2 分。Yomi 增加 $3");
    
    // Dynamic project translations
    s = s.replace(/^Threnody for the Heroes of (.*)$/, "为 $1 的英雄们唱挽歌");
    if (s.startsWith("(")) {
      s = s.replace(/ops/g, "算力");
      s = s.replace(/creat/g, "创造力");
      s = s.replace(/yomi/g, "Yomi");
      s = s.replace(/Trust/g, "信任");
      s = s.replace(/clips/g, "回形针");
      s = s.replace(/MEM/g, "内存");
      s = s.replace(/MW-seconds/g, "兆瓦秒");
      s = s.replace(/oct/g, "辛");
      s = s.replace(/nonillion/g, "无量大数");
      s = s.replace(/sextillion/g, "十垓");
    }
    
    return s;
  }

  function translateDOM(){
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node)=>{
      const raw = node.nodeValue;
      const normalized = normalizeText(raw);
      if (!normalized) return;
      const translated = localizeExact(raw);
      if (translated !== raw) {
        node.nodeValue = translated;
      }
    });
  }

  window.localizeText = localizeExact;
  window.localizeMessage = localizeDynamic;

  document.addEventListener('DOMContentLoaded', translateDOM);
})();

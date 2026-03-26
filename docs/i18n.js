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
    "Run": "运行",
    "Pick strategy, run tournament, gain yomi": "选择策略并运行锦标赛以获得 Yomi",
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

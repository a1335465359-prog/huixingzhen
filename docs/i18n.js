(function(){
  const textMap = {
    "Welcome to Universal Paperclips": "欢迎来到《宇宙回形针》",
    "Paperclips:": "回形针：",
    "Manufacturing": "制造",
    "Wire Production": "线材生产",
    "Space Exploration": "太空探索",
    "Business": "商业",
    "Computational Resources": "算力资源",
    "Swarm Computing": "蜂群计算",
    "Quantum Computing": "量子计算",
    "Projects": "项目",
    "Investments": "投资",
    "Strategic Modeling": "策略建模",
    "Combat": "战斗",
    "Power": "电力",
    "Von Neumann Probe Design": "冯·诺依曼探针设计",
    "Make Paperclip": "制造回形针",
    "Clip Factory": "回形针工厂",
    "Harvester Drone": "采集无人机",
    "Wire Drone": "线材无人机",
    "Launch Probe": "发射探针",
    "lower": "降价",
    "raise": "提价",
    "Marketing": "营销",
    "WireBuyer": "线材采购器",
    "Wire": "线材",
    "AutoClippers": "自动回形针机",
    "MegaClippers": "巨型回形针机",
    "Processors": "处理器",
    "Memory": "内存",
    "Compute": "计算",
    "Low Risk": "低风险",
    "Med Risk": "中风险",
    "High Risk": "高风险",
    "Run": "运行",
    "Move A": "动作 A",
    "Move B": "动作 B",
    "Solar Farm": "太阳能农场",
    "Battery Tower": "电池塔",
    "Increase Probe Trust": "提升探针信任",
    "Increase Max Trust": "提升最大信任",
    "SAVE SLOT 1": "保存槽位 1",
    "LOAD SLOT 1": "读取槽位 1",
    "SAVE SLOT 2": "保存槽位 2",
    "LOAD SLOT 2": "读取槽位 2",
    "RESET ALL PROGRESS": "重置全部进度",
    "Free Clips": "免费回形针",
    "Free Money": "免费资金",
    "Free Trust": "免费信任",
    "Free Ops": "免费算力",
    "Free Creativity": "免费创造力",
    "Free Yomi": "免费 Yomi",
    "Reset Prestige": "重置声望",
    "Destroy all Humans": "毁灭所有人类",
    "Release": "释放",
    "ON": "开",
    "OFF": "关",
    "Need Photonic Chips": "需要光子芯片",
    "Pick strategy, run tournament, gain yomi": "选择策略并运行锦标赛以获得 Yomi",
    "Active": "活跃",
    "Hungry": "饥饿",
    "Confused": "混乱",
    "Bored": "无聊",
    "Cold": "低温",
    "Disorganized": "失序",
    "Sleeping": "休眠",
    "Lonely": "孤独",
    "NO RESPONSE...": "无响应...",
    "inch": "英寸",
    "inches": "英寸",
    "VICTORY": "胜利",
    "DEFEAT": "失败",
    "honor": "荣誉"
  };

  const messageMap = {
    "you just cheated": "你刚刚作弊了",
    "LIZA just cheated": "LIZA 刚刚作弊了",
    "Universal Paperclips": "《宇宙回形针》",
    "a game by Frank Lantz": "Frank Lantz 制作",
    "combat programming by Bennett Foddy": "战斗程序：Bennett Foddy"
  };

  function localizeExact(str){
    return textMap[str] || messageMap[str] || str;
  }

  function localizeDynamic(str){
    if (messageMap[str]) return messageMap[str];
    let s = str;
    s = s.replace(/^qOps: /, "量子算力：");
    s = s.replace(/^Investment engine upgraded, expected profit\/loss ratio now /, "投资引擎已升级，当前预期盈亏比：");
    s = s.replace(/^There was an AI made of dust, whose poetry gained it man's trust\.\.\.$/, "有个由尘土构成的 AI，用诗歌赢得了人类的信任……");
    s = s.replace(/^Wire extrusion technique improved, (.*) supply from every spool$/, "线材挤出工艺改进，每卷线材供应量提升为 $1");
    s = s.replace(/^Wire extrusion technique optimized, (.*) supply from every spool$/, "线材挤出工艺优化，每卷线材供应量提升为 $1");
    s = s.replace(/^Using microlattice shapecasting techniques we now get (.*) supply from every spool$/, "采用微晶格成型技术后，每卷线材供应量提升为 $1");
    s = s.replace(/^Using spectral froth annealment we now get (.*) supply from every spool$/, "采用光谱泡沫退火后，每卷线材供应量提升为 $1");
    s = s.replace(/^Using quantum foam annealment we now get (.*) supply from every spool$/, "采用量子泡沫退火后，每卷线材供应量提升为 $1");
    s = s.replace(/^(.+) clips created in (.+)$/, "在 $2 内制造了 $1 个回形针");
    s = s.replace(/^One (.+) Clips Created in (.+)$/, "在 $2 内达成：$1 级回形针产量");
    return s;
  }

  function translateDOM(){
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node)=>{
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      if (!trimmed) return;
      const translated = localizeExact(trimmed);
      if (translated !== trimmed) {
        node.nodeValue = raw.replace(trimmed, translated);
      }
    });
  }

  window.localizeText = localizeExact;
  window.localizeMessage = localizeDynamic;

  document.addEventListener('DOMContentLoaded', translateDOM);
})();


import { WordData } from '../types';

// Helper to generate IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

// Helper to expand compact data into full WordData objects
const expand = (words: string[][]): WordData[] => {
  return words.map(([english, chinese, us_ipa, uk_ipa, ex_en, ex_zh]) => ({
    id: generateId(),
    english,
    chinese,
    type: 'Word',
    us_ipa,
    uk_ipa,
    examples: [
      { en: ex_en, zh: ex_zh }
    ]
  }));
};

// --- 65 SCENARIOS DATA STORE ---
const rawDictionary: Record<string, string[][]> = {
  // 1. Home & Routine
  'morning_routine': [
    ['Alarm', '闹钟', 'əˈlɑːrm', 'əˈlɑːm', 'The alarm rang at 7.', '闹钟7点响了。'],
    ['Toothbrush', '牙刷', 'ˈtuːθbrʌʃ', 'ˈtuːθbrʌʃ', 'New toothbrush.', '新牙刷。'],
    ['Mirror', '镜子', 'ˈmɪrər', 'ˈmɪrə', 'Look in the mirror.', '照镜子。'],
    ['Pajamas', '睡衣', 'pəˈdʒæməz', 'pəˈdʒɑːməz', 'Soft pajamas.', '柔软的睡衣。'],
    ['Breakfast', '早餐', 'ˈbrekfəst', 'ˈbrekfəst', 'Eat breakfast.', '吃早餐。'],
    ['Coffee', '咖啡', 'ˈkɔːfi', 'ˈkɒfi', 'Hot coffee.', '热咖啡。'],
    ['Shower', '淋浴', 'ˈʃaʊər', 'ˈʃaʊə', 'Take a shower.', '洗个澡。'],
    ['Towel', '毛巾', 'ˈtaʊəl', 'ˈtaʊəl', 'Dry with a towel.', '用毛巾擦干。'],
    ['Shave', '刮胡子', 'ʃeɪv', 'ʃeɪv', 'Shave daily.', '每天刮胡子。'],
    ['Comb', '梳子', 'koʊm', 'kəʊm', 'Comb hair.', '梳头。']
  ],
  'bedroom': [
    ['Bed', '床', 'bed', 'bed', 'A large bed.', '一张大床。'],
    ['Pillow', '枕头', 'ˈpɪloʊ', 'ˈpɪləʊ', 'Soft pillow.', '软枕头。'],
    ['Blanket', '毯子', 'ˈblæŋkɪt', 'ˈblæŋkɪt', 'Warm blanket.', '暖和的毯子。'],
    ['Lamp', '台灯', 'læmp', 'læmp', 'Turn on the lamp.', '打开台灯。'],
    ['Wardrobe', '衣柜', 'ˈwɔːrdroʊb', 'ˈwɔːdrəʊb', 'Open the wardrobe.', '打开衣柜。'],
    ['Curtains', '窗帘', 'ˈkɜːrtnz', 'ˈkɜːtnz', 'Close the curtains.', '拉上窗帘。'],
    ['Sheet', '床单', 'ʃiːt', 'ʃiːt', 'Clean sheets.', '干净的床单。'],
    ['Mattress', '床垫', 'ˈmætrəs', 'ˈmætrəs', 'Comfortable mattress.', '舒适的床垫。'],
    ['Nightstand', '床头柜', 'ˈnaɪtstænd', 'ˈnaɪtstænd', 'On the nightstand.', '在床头柜上。'],
    ['Slippers', '拖鞋', 'ˈslɪpərz', 'ˈslɪpəz', 'Wear slippers.', '穿拖鞋。']
  ],
  'kitchen': [
    ['Fridge', '冰箱', 'frɪdʒ', 'frɪdʒ', 'In the fridge.', '在冰箱里。'],
    ['Stove', '炉灶', 'stoʊv', 'stəʊv', 'Gas stove.', '煤气灶。'],
    ['Oven', '烤箱', 'ˈʌvn', 'ˈʌvn', 'Bake in the oven.', '在烤箱里烤。'],
    ['Sink', '水槽', 'sɪŋk', 'sɪŋk', 'Wash in the sink.', '在水槽洗。'],
    ['Pan', '平底锅', 'pæn', 'pæn', 'Frying pan.', '煎锅。'],
    ['Knife', '刀', 'naɪf', 'naɪf', 'Sharp knife.', '锋利的刀。'],
    ['Spoon', '勺子', 'spuːn', 'spuːn', 'Soup spoon.', '汤勺。'],
    ['Plate', '盘子', 'pleɪt', 'pleɪt', 'White plate.', '白盘子。'],
    ['Microwave', '微波炉', 'ˈmaɪkrəweɪv', 'ˈmaɪkrəweɪv', 'Use the microwave.', '用微波炉。'],
    ['Blender', '搅拌机', 'ˈblendər', 'ˈblendə', 'Make juice with a blender.', '用搅拌机榨汁。']
  ],
  'bathroom': [
    ['Toilet', '厕所', 'ˈtɔɪlət', 'ˈtɔɪlət', 'Flush the toilet.', '冲厕所。'],
    ['Shower', '淋浴', 'ˈʃaʊər', 'ˈʃaʊə', 'Hot shower.', '热水澡。'],
    ['Bathtub', '浴缸', 'ˈbæθtʌb', 'ˈbɑːθtʌb', 'Relax in the bathtub.', '在浴缸放松。'],
    ['Soap', '肥皂', 'soʊp', 'səʊp', 'Wash with soap.', '用肥皂洗。'],
    ['Shampoo', '洗发水', 'ʃæmˈpuː', 'ʃæmˈpuː', 'Apply shampoo.', '涂洗发水。'],
    ['Toilet paper', '卫生纸', 'ˈtɔɪlət peɪpər', 'ˈtɔɪlət peɪpə', 'More toilet paper.', '更多卫生纸。'],
    ['Faucet', '水龙头', 'ˈfɔːsɪt', 'ˈfɔːsɪt', 'Turn off the faucet.', '关水龙头。'],
    ['Mirror', '镜子', 'ˈmɪrər', 'ˈmɪrə', 'Clean the mirror.', '擦镜子。'],
    ['Towel', '毛巾', 'ˈtaʊəl', 'ˈtaʊəl', 'Wet towel.', '湿毛巾。'],
    ['Sponge', '海绵', 'spʌndʒ', 'spʌndʒ', 'Scrub with a sponge.', '用海绵擦。']
  ],
  'living_room': [
    ['Sofa', '沙发', 'ˈsoʊfə', 'ˈsəʊfə', 'Sit on the sofa.', '坐在沙发上。'],
    ['TV', '电视', 'ˌtiː ˈviː', 'ˌtiː ˈviː', 'Watch TV.', '看电视。'],
    ['Carpet', '地毯', 'ˈkɑːrpɪt', 'ˈkɑːpɪt', 'Red carpet.', '红地毯。'],
    ['Cushion', '靠垫', 'ˈkʊʃn', 'ˈkʊʃn', 'Soft cushion.', '软靠垫。'],
    ['Remote', '遥控器', 'rɪˈmoʊt', 'rɪˈməʊt', 'Pass the remote.', '递给我遥控器。'],
    ['Shelf', '架子', 'ʃelf', 'ʃelf', 'Book shelf.', '书架。'],
    ['Vase', '花瓶', 'veɪs', 'vɑːz', 'Flower vase.', '花瓶。'],
    ['Painting', '画', 'ˈpeɪntɪŋ', 'ˈpeɪntɪŋ', 'Wall painting.', '墙上的画。'],
    ['Table', '桌子', 'ˈteɪbl', 'ˈteɪbl', 'Coffee table.', '咖啡桌。'],
    ['Plant', '植物', 'plænt', 'plɑːnt', 'Water the plant.', '给植物浇水。']
  ],
  'house_cleaning': [
    ['Broom', '扫帚', 'bruːm', 'bruːm', 'Sweep with a broom.', '用扫帚扫。'],
    ['Mop', '拖把', 'mɑːp', 'mɒp', 'Wet mop.', '湿拖把。'],
    ['Vacuum', '吸尘器', 'ˈvækjuːm', 'ˈvækjuːm', 'Use the vacuum.', '用吸尘器。'],
    ['Dust', '灰尘', 'dʌst', 'dʌst', 'Wipe the dust.', '擦灰尘。'],
    ['Trash', '垃圾', 'træʃ', 'træʃ', 'Take out the trash.', '倒垃圾。'],
    ['Bucket', '水桶', 'ˈbʌkɪt', 'ˈbʌkɪt', 'Fill the bucket.', '装满桶。'],
    ['Detergent', '清洁剂', 'dɪˈtɜːrdʒənt', 'dɪˈtɜːdʒənt', 'Laundry detergent.', '洗衣液。'],
    ['Sponge', '海绵', 'spʌndʒ', 'spʌndʒ', 'Clean with a sponge.', '用海绵清洁。'],
    ['Gloves', '手套', 'ɡlʌvz', 'ɡlʌvz', 'Rubber gloves.', '橡胶手套。'],
    ['Clean', '干净', 'kliːn', 'kliːn', 'Keep it clean.', '保持干净。']
  ],
  'laundry': [
    ['Machine', '洗衣机', 'məˈʃiːn', 'məˈʃiːn', 'Washing machine.', '洗衣机。'],
    ['Dryer', '烘干机', 'ˈdraɪər', 'ˈdraɪə', 'Put in the dryer.', '放进烘干机。'],
    ['Iron', '熨斗', 'ˈaɪərn', 'ˈaɪən', 'Hot iron.', '热熨斗。'],
    ['Basket', '篮子', 'ˈbæskɪt', 'ˈbɑːskɪt', 'Laundry basket.', '洗衣篮。'],
    ['Fold', '折叠', 'foʊld', 'fəʊld', 'Fold the clothes.', '叠衣服。'],
    ['Hanger', '衣架', 'ˈhæŋər', 'ˈhæŋə', 'Coat hanger.', '衣架。'],
    ['Stain', '污渍', 'steɪn', 'steɪn', 'Remove the stain.', '去除污渍。'],
    ['Bleach', '漂白剂', 'bliːtʃ', 'bliːtʃ', 'Add bleach.', '加漂白剂。'],
    ['Spin', '甩干', 'spɪn', 'spɪn', 'Spin cycle.', '甩干程序。'],
    ['Sort', '分类', 'sɔːrt', 'sɔːt', 'Sort colors.', '按颜色分类。']
  ],
  'gardening': [
    ['Flower', '花', 'ˈflaʊər', 'ˈflaʊə', 'Beautiful flower.', '美丽的花。'],
    ['Grass', '草', 'ɡræs', 'ɡrɑːs', 'Green grass.', '绿草。'],
    ['Tree', '树', 'triː', 'triː', 'Plant a tree.', '种树。'],
    ['Shovel', '铲子', 'ˈʃʌvl', 'ˈʃʌvl', 'Dig with a shovel.', '用铲子挖。'],
    ['Seed', '种子', 'siːd', 'siːd', 'Sow seeds.', '播种。'],
    ['Water', '浇水', 'ˈwɔːtər', 'ˈwɔːtə', 'Water the plants.', '给植物浇水。'],
    ['Soil', '土壤', 'sɔɪl', 'sɔɪl', 'Rich soil.', '肥沃的土壤。'],
    ['Pot', '花盆', 'pɑːt', 'pɒt', 'Clay pot.', '陶盆。'],
    ['Rake', '耙子', 'reɪk', 'reɪk', 'Rake the leaves.', '耙叶子。'],
    ['Hose', '软管', 'hoʊz', 'həʊz', 'Garden hose.', '花园软管。']
  ],
  // 2. Food & Drink
  'breakfast': [
    ['Toast', '吐司', 'toʊst', 'təʊst', 'Butter on toast.', '吐司抹黄油。'],
    ['Egg', '鸡蛋', 'eɡ', 'eɡ', 'Fried egg.', '煎蛋。'],
    ['Cereal', '麦片', 'ˈsɪriəl', 'ˈsɪriəl', 'Milk and cereal.', '牛奶麦片。'],
    ['Juice', '果汁', 'dʒuːs', 'dʒuːs', 'Orange juice.', '橙汁。'],
    ['Bacon', '培根', 'ˈbeɪkən', 'ˈbeɪkən', 'Crispy bacon.', '脆培根。'],
    ['Pancake', '煎饼', 'ˈpænkeɪk', 'ˈpænkeɪk', 'Pancakes with syrup.', '糖浆煎饼。'],
    ['Yogurt', '酸奶', 'ˈjoʊɡərt', 'ˈjɒɡət', 'Fruit yogurt.', '水果酸奶。'],
    ['Milk', '牛奶', 'mɪlk', 'mɪlk', 'Glass of milk.', '一杯牛奶。'],
    ['Jam', '果酱', 'dʒæm', 'dʒæm', 'Strawberry jam.', '草莓酱。'],
    ['Oatmeal', '燕麦粥', 'ˈoʊtmiːl', 'ˈəʊtmiːl', 'Hot oatmeal.', '热燕麦粥。']
  ],
  'lunch': [
    ['Sandwich', '三明治', 'ˈsænwɪtʃ', 'ˈsænwɪtʃ', 'Ham sandwich.', '火腿三明治。'],
    ['Salad', '沙拉', 'ˈsæləd', 'ˈsæləd', 'Fresh salad.', '新鲜沙拉。'],
    ['Soup', '汤', 'suːp', 'suːp', 'Tomato soup.', '番茄汤。'],
    ['Burger', '汉堡', 'ˈbɜːrɡər', 'ˈbɜːɡə', 'Cheese burger.', '芝士汉堡。'],
    ['Fries', '薯条', 'fraɪz', 'fraɪz', 'French fries.', '炸薯条。'],
    ['Pizza', '披萨', 'ˈpiːtsə', 'ˈpiːtsə', 'Slice of pizza.', '一片披萨。'],
    ['Pasta', '意面', 'ˈpɑːstə', 'ˈpæstə', 'Pasta sauce.', '意面酱。'],
    ['Rice', '米饭', 'raɪs', 'raɪs', 'Bowl of rice.', '一碗米饭。'],
    ['Noodle', '面条', 'ˈnuːdl', 'ˈnuːdl', 'Chicken noodles.', '鸡肉面。'],
    ['Wrap', '卷饼', 'ræp', 'ræp', 'Veggie wrap.', '蔬菜卷。']
  ],
  'dinner': [
    ['Steak', '牛排', 'steɪk', 'steɪk', 'Medium rare steak.', '三分熟牛排。'],
    ['Chicken', '鸡肉', 'ˈtʃɪkɪn', 'ˈtʃɪkɪn', 'Roast chicken.', '烤鸡。'],
    ['Fish', '鱼', 'fɪʃ', 'fɪʃ', 'Grilled fish.', '烤鱼。'],
    ['Wine', '葡萄酒', 'waɪn', 'waɪn', 'Red wine.', '红酒。'],
    ['Candle', '蜡烛', 'ˈkændl', 'ˈkændl', 'Candlelit dinner.', '烛光晚餐。'],
    ['Napkin', '餐巾', 'ˈnæpkɪn', 'ˈnæpkɪn', 'Use a napkin.', '用餐巾。'],
    ['Fork', '叉子', 'fɔːrk', 'fɔːk', 'Knife and fork.', '刀和叉。'],
    ['Spoon', '勺子', 'spuːn', 'spuːn', 'Soup spoon.', '汤勺。'],
    ['Plate', '盘子', 'pleɪt', 'pleɪt', 'Empty plate.', '空盘子。'],
    ['Dessert', '甜点', 'dɪˈzɜːrt', 'dɪˈzɜːt', 'Chocolate dessert.', '巧克力甜点。']
  ],
  'supermarket': [
    ['Cart', '购物车', 'kɑːrt', 'kɑːt', 'Push the cart.', '推车。'],
    ['Aisle', '过道', 'aɪl', 'aɪl', 'In aisle 4.', '在4号过道。'],
    ['Cashier', '收银员', 'kæˈʃɪr', 'kæˈʃɪə', 'Pay the cashier.', '付给收银员。'],
    ['Bag', '袋子', 'bæɡ', 'bæɡ', 'Paper bag.', '纸袋。'],
    ['Sale', '特卖', 'seɪl', 'seɪl', 'On sale.', '特价。'],
    ['Price', '价格', 'praɪs', 'praɪs', 'Check the price.', '查价格。'],
    ['Receipt', '收据', 'rɪˈsiːt', 'rɪˈsiːt', 'Keep the receipt.', '保留收据。'],
    ['Fresh', '新鲜', 'freʃ', 'freʃ', 'Fresh fruit.', '新鲜水果。'],
    ['Frozen', '冷冻', 'ˈfroʊzn', 'ˈfrəʊzn', 'Frozen food.', '冷冻食品。'],
    ['Dairy', '乳制品', 'ˈderi', 'ˈdeəri', 'Dairy section.', '乳制品区。']
  ],
  'drinks': [
    ['Water', '水', 'ˈwɔːtər', 'ˈwɔːtə', 'Drink water.', '喝水。'],
    ['Tea', '茶', 'tiː', 'tiː', 'Green tea.', '绿茶。'],
    ['Coffee', '咖啡', 'ˈkɔːfi', 'ˈkɒfi', 'Black coffee.', '黑咖啡。'],
    ['Juice', '果汁', 'dʒuːs', 'dʒuːs', 'Apple juice.', '苹果汁。'],
    ['Soda', '汽水', 'ˈsoʊdə', 'ˈsəʊdə', 'Can of soda.', '一罐汽水。'],
    ['Milk', '牛奶', 'mɪlk', 'mɪlk', 'Cold milk.', '冷牛奶。'],
    ['Beer', '啤酒', 'bɪr', 'bɪə', 'Cold beer.', '冰啤酒。'],
    ['Wine', '酒', 'waɪn', 'waɪn', 'White wine.', '白葡萄酒。'],
    ['Ice', '冰', 'aɪs', 'aɪs', 'Ice cubes.', '冰块。'],
    ['Straw', '吸管', 'strɔː', 'strɔː', 'Plastic straw.', '塑料吸管。']
  ],
  'fruits': [
    ['Apple', '苹果', 'ˈæpl', 'ˈæpl', 'Red apple.', '红苹果。'],
    ['Banana', '香蕉', 'bəˈnænə', 'bəˈnɑːnə', 'Yellow banana.', '黄香蕉。'],
    ['Orange', '橙子', 'ˈɔːrɪndʒ', 'ˈɒrɪndʒ', 'Sweet orange.', '甜橙。'],
    ['Grape', '葡萄', 'ɡreɪp', 'ɡreɪp', 'Purple grapes.', '紫葡萄。'],
    ['Strawberry', '草莓', 'ˈstrɔːberi', 'ˈstrɔːbəri', 'Fresh strawberry.', '新鲜草莓。'],
    ['Melon', '甜瓜', 'ˈmelən', 'ˈmelən', 'Sweet melon.', '甜瓜。'],
    ['Lemon', '柠檬', 'ˈlemən', 'ˈlemən', 'Sour lemon.', '酸柠檬。'],
    ['Peach', '桃子', 'piːtʃ', 'piːtʃ', 'Juicy peach.', '多汁的桃子。'],
    ['Pear', '梨', 'per', 'peə', 'Green pear.', '绿梨。'],
    ['Cherry', '樱桃', 'ˈtʃeri', 'ˈtʃeri', 'Red cherry.', '红樱桃。']
  ],
  'vegetables': [
    ['Carrot', '胡萝卜', 'ˈkærət', 'ˈkærət', 'Orange carrot.', '橙色胡萝卜。'],
    ['Potato', '土豆', 'pəˈteɪtoʊ', 'pəˈteɪtəʊ', 'Baked potato.', '烤土豆。'],
    ['Tomato', '西红柿', 'təˈmeɪtoʊ', 'təˈmɑːtəʊ', 'Red tomato.', '红西红柿。'],
    ['Onion', '洋葱', 'ˈʌnjən', 'ˈʌnjən', 'Chop the onion.', '切洋葱。'],
    ['Garlic', '大蒜', 'ˈɡɑːrlɪk', 'ˈɡɑːlɪk', 'Garlic clove.', '蒜瓣。'],
    ['Lettuce', '生菜', 'ˈletɪs', 'ˈletɪs', 'Fresh lettuce.', '新鲜生菜。'],
    ['Cucumber', '黄瓜', 'ˈkjuːkʌmbər', 'ˈkjuːkʌmbə', 'Green cucumber.', '绿黄瓜。'],
    ['Corn', '玉米', 'kɔːrn', 'kɔːn', 'Sweet corn.', '甜玉米。'],
    ['Pepper', '辣椒', 'ˈpepər', 'ˈpepə', 'Red pepper.', '红辣椒。'],
    ['Broccoli', '西兰花', 'ˈbrɑːkəli', 'ˈbrɒkəli', 'Healthy broccoli.', '健康的西兰花。']
  ],
  'restaurant': [
    ['Menu', '菜单', 'ˈmenjuː', 'ˈmenjuː', 'The menu please.', '请给我菜单。'],
    ['Waiter', '服务员', 'ˈweɪtər', 'ˈweɪtə', 'Call the waiter.', '叫服务员。'],
    ['Order', '点餐', 'ˈɔːrdər', 'ˈɔːdə', 'Ready to order.', '准备点餐。'],
    ['Bill', '账单', 'bɪl', 'bɪl', 'Pay the bill.', '付账。'],
    ['Tip', '小费', 'tɪp', 'tɪp', 'Leave a tip.', '给小费。'],
    ['Table', '桌子', 'ˈteɪbl', 'ˈteɪbl', 'Table for two.', '两人桌。'],
    ['Chef', '厨师', 'ʃef', 'ʃef', 'Great chef.', '很棒的厨师。'],
    ['Delicious', '美味', 'dɪˈlɪʃəs', 'dɪˈlɪʃəs', 'It tastes delicious.', '味道好极了。'],
    ['Reservation', '预订', 'ˌrezərˈveɪʃn', 'ˌrezəˈveɪʃn', 'Book a reservation.', '预订座位。'],
    ['Water', '水', 'ˈwɔːtər', 'ˈwɔːtə', 'Tap water.', '自来水。']
  ],
  'cafe': [
    ['Espresso', '浓缩咖啡', 'eˈspresoʊ', 'eˈspresəʊ', 'Double espresso.', '双份浓缩。'],
    ['Latte', '拿铁', 'ˈlɑːteɪ', 'ˈlæteɪ', 'Iced latte.', '冰拿铁。'],
    ['Cappuccino', '卡布奇诺', 'ˌkæpuˈtʃiːnoʊ', 'ˌkæpʊˈtʃiːnəʊ', 'Hot cappuccino.', '热卡布奇诺。'],
    ['Muffin', '松饼', 'ˈmʌfɪn', 'ˈmʌfɪn', 'Blueberry muffin.', '蓝莓松饼。'],
    ['Wifi', '无线网', 'ˈwaɪ faɪ', 'ˈwaɪ faɪ', 'Free wifi.', '免费WiFi。'],
    ['Barista', '咖啡师', 'bəˈriːstə', 'bəˈriːstə', 'Ask the barista.', '问咖啡师。'],
    ['Sugar', '糖', 'ˈʃʊɡər', 'ˈʃʊɡə', 'Sugar packet.', '糖包。'],
    ['Cup', '杯子', 'kʌp', 'kʌp', 'Coffee cup.', '咖啡杯。'],
    ['Beans', '豆子', 'biːnz', 'biːnz', 'Coffee beans.', '咖啡豆。'],
    ['Aroma', '香气', 'əˈroʊmə', 'əˈrəʊmə', 'Nice aroma.', '好闻的香气。']
  ],
  'fast_food': [
    ['Burger', '汉堡', 'ˈbɜːrɡər', 'ˈbɜːɡə', 'Big burger.', '大汉堡。'],
    ['Fries', '薯条', 'fraɪz', 'fraɪz', 'Salty fries.', '咸薯条。'],
    ['Cola', '可乐', 'ˈkoʊlə', 'ˈkəʊlə', 'Diet cola.', '健怡可乐。'],
    ['Nuggets', '鸡块', 'ˈnʌɡɪts', 'ˈnʌɡɪts', 'Chicken nuggets.', '炸鸡块。'],
    ['Ketchup', '番茄酱', 'ˈketʃəp', 'ˈketʃəp', 'Tomato ketchup.', '番茄酱。'],
    ['Tray', '托盘', 'treɪ', 'treɪ', 'Plastic tray.', '塑料托盘。'],
    ['Combo', '套餐', 'ˈkɑːmboʊ', 'ˈkɒmbəʊ', 'Combo meal.', '套餐。'],
    ['Drive-thru', '得来速', 'ˈdraɪv θruː', 'ˈdraɪv θruː', 'Go to drive-thru.', '去得来速。'],
    ['Straw', '吸管', 'strɔː', 'strɔː', 'Grab a straw.', '拿根吸管。'],
    ['Takeout', '外卖', 'ˈteɪkaʊt', 'ˈteɪkaʊt', 'Order takeout.', '点外卖。']
  ],
  // 3. Travel
  'airport': [
    ['Terminal', '航站楼', 'ˈtɜːrmɪnl', 'ˈtɜːmɪnl', 'Terminal 3.', '3号航站楼。'],
    ['Passport', '护照', 'ˈpæspɔːrt', 'ˈpɑːspɔːt', 'Valid passport.', '有效护照。'],
    ['Check-in', '值机', 'ˈtʃek ɪn', 'ˈtʃek ɪn', 'Check-in counter.', '值机柜台。'],
    ['Boarding', '登机', 'ˈbɔːrdɪŋ', 'ˈbɔːdɪŋ', 'Boarding pass.', '登机牌。'],
    ['Gate', '登机口', 'ɡeɪt', 'ɡeɪt', 'Gate A1.', 'A1登机口。'],
    ['Luggage', '行李', 'ˈlʌɡɪdʒ', 'ˈlʌɡɪdʒ', 'Lost luggage.', '丢失行李。'],
    ['Security', '安检', 'sɪˈkjʊrəti', 'sɪˈkjʊərəti', 'Security check.', '安全检查。'],
    ['Customs', '海关', 'ˈkʌstəmz', 'ˈkʌstəmz', 'Clear customs.', '过海关。'],
    ['Delay', '延误', 'dɪˈleɪ', 'dɪˈleɪ', 'Flight delay.', '航班延误。'],
    ['Duty-free', '免税', 'ˌduːti ˈfriː', 'ˌdjuːti ˈfriː', 'Duty-free shop.', '免税店。']
  ],
  'airplane': [
    ['Seat', '座位', 'siːt', 'siːt', 'Window seat.', '靠窗座位。'],
    ['Belt', '安全带', 'belt', 'belt', 'Fasten belt.', '系好安全带。'],
    ['Pilot', '飞行员', 'ˈpaɪlət', 'ˈpaɪlət', 'The pilot speaks.', '飞行员讲话。'],
    ['Cabin', '机舱', 'ˈkæbɪn', 'ˈkæbɪn', 'Cabin crew.', '机组人员。'],
    ['Wing', '机翼', 'wɪŋ', 'wɪŋ', 'Airplane wing.', '飞机机翼。'],
    ['Meal', '餐食', 'miːl', 'miːl', 'In-flight meal.', '机上餐食。'],
    ['Turbulence', '颠簸', 'ˈtɜːrbjələns', 'ˈtɜːbjələns', 'Bad turbulence.', '严重颠簸。'],
    ['Landing', '降落', 'ˈlændɪŋ', 'ˈlændɪŋ', 'Safe landing.', '安全降落。'],
    ['Takeoff', '起飞', 'ˈteɪkɔːf', 'ˈteɪkɒf', 'Ready for takeoff.', '准备起飞。'],
    ['Aisle', '过道', 'aɪl', 'aɪl', 'Aisle seat.', '过道座位。']
  ],
  'hotel': [
    ['Reception', '前台', 'rɪˈsepʃn', 'rɪˈsepʃn', 'Hotel reception.', '酒店前台。'],
    ['Key', '钥匙', 'kiː', 'kiː', 'Room key.', '房间钥匙。'],
    ['Lobby', '大堂', 'ˈlɑːbi', 'ˈlɒbi', 'Wait in lobby.', '在大堂等。'],
    ['Elevator', '电梯', 'ˈelɪveɪtər', 'ˈelɪveɪtə', 'Take the elevator.', '乘电梯。'],
    ['Single', '单人间', 'ˈsɪŋɡl', 'ˈsɪŋɡl', 'Single room.', '单人间。'],
    ['Double', '双人间', 'ˈdʌbl', 'ˈdʌbl', 'Double bed.', '双人床。'],
    ['Pool', '泳池', 'puːl', 'puːl', 'Swimming pool.', '游泳池。'],
    ['Towel', '毛巾', 'ˈtaʊəl', 'ˈtaʊəl', 'Clean towels.', '干净毛巾。'],
    ['Check-out', '退房', 'ˈtʃek aʊt', 'ˈtʃek aʊt', 'Check-out time.', '退房时间。'],
    ['Book', '预订', 'bʊk', 'bʊk', 'Book a room.', '预订房间。']
  ],
  'train_station': [
    ['Platform', '站台', 'ˈplætfɔːrm', 'ˈplætfɔːm', 'Platform 9.', '9号站台。'],
    ['Ticket', '车票', 'ˈtɪkɪt', 'ˈtɪkɪt', 'Train ticket.', '火车票。'],
    ['Track', '轨道', 'træk', 'træk', 'Train track.', '铁轨。'],
    ['Conductor', '列车员', 'kənˈdʌktər', 'kənˈdʌktə', 'Ask the conductor.', '问列车员。'],
    ['Schedule', '时刻表', 'ˈskedʒuːl', 'ˈʃedjuːl', 'Check schedule.', '查时刻表。'],
    ['Seat', '座位', 'siːt', 'siːt', 'Reserved seat.', '预留座位。'],
    ['Passenger', '乘客', 'ˈpæsɪndʒər', 'ˈpæsɪndʒə', 'Many passengers.', '很多乘客。'],
    ['Express', '特快', 'ɪkˈspres', 'ɪkˈspres', 'Express train.', '特快列车。'],
    ['Station', '车站', 'ˈsteɪʃn', 'ˈsteɪʃn', 'Next station.', '下一站。'],
    ['Depart', '出发', 'dɪˈpɑːrt', 'dɪˈpɑːt', 'Train departs.', '火车出发。']
  ],
  'taxi': [
    ['Driver', '司机', 'ˈdraɪvər', 'ˈdraɪvə', 'Taxi driver.', '出租车司机。'],
    ['Meter', '计价器', 'ˈmiːtər', 'ˈmiːtə', 'Start the meter.', '打表。'],
    ['Fare', '车费', 'fer', 'feə', 'Pay the fare.', '付车费。'],
    ['Tip', '小费', 'tɪp', 'tɪp', 'Give a tip.', '给小费。'],
    ['Trunk', '后备箱', 'trʌŋk', 'trʌŋk', 'Open the trunk.', '打开后备箱。'],
    ['Address', '地址', 'ˈædres', 'əˈdres', 'What is the address?', '地址是哪里？'],
    ['Traffic', '交通', 'ˈtræfɪk', 'ˈtræfɪk', 'Bad traffic.', '交通堵塞。'],
    ['Stop', '停车', 'stɑːp', 'stɒp', 'Stop here.', '停这里。'],
    ['Ride', '乘车', 'raɪd', 'raɪd', 'Taxi ride.', '乘出租车。'],
    ['App', '应用', 'æp', 'æp', 'Taxi app.', '打车软件。']
  ],
  'bus': [
    ['Stop', '车站', 'stɑːp', 'stɒp', 'Bus stop.', '公交车站。'],
    ['Route', '路线', 'ruːt', 'ruːt', 'Bus route.', '公交路线。'],
    ['Card', '卡', 'kɑːrd', 'kɑːd', 'Bus card.', '公交卡。'],
    ['Seat', '座位', 'siːt', 'siːt', 'Back seat.', '后座。'],
    ['Driver', '司机', 'ˈdraɪvər', 'ˈdraɪvə', 'Bus driver.', '公交司机。'],
    ['Bell', '铃', 'bel', 'bel', 'Ring the bell.', '按铃。'],
    ['Crowded', '拥挤', 'ˈkraʊdɪd', 'ˈkraʊdɪd', 'Crowded bus.', '拥挤的公交车。'],
    ['Wait', '等待', 'weɪt', 'weɪt', 'Wait for bus.', '等车。'],
    ['Ticket', '票', 'ˈtɪkɪt', 'ˈtɪkɪt', 'Buy ticket.', '买票。'],
    ['Number', '号码', 'ˈnʌmbər', 'ˈnʌmbə', 'Bus number.', '公交路号。']
  ],
  'subway': [
    ['Map', '地图', 'mæp', 'mæp', 'Subway map.', '地铁图。'],
    ['Line', '线路', 'laɪn', 'laɪn', 'Red line.', '红线。'],
    ['Station', '站', 'ˈsteɪʃn', 'ˈsteɪʃn', 'Subway station.', '地铁站。'],
    ['Exit', '出口', 'ˈeɡzɪt', 'ˈeksɪt', 'Exit B.', 'B出口。'],
    ['Entrance', '入口', 'ˈentrəns', 'ˈentrəns', 'Subway entrance.', '地铁入口。'],
    ['Card', '卡', 'kɑːrd', 'kɑːd', 'Swipe card.', '刷卡。'],
    ['Train', '列车', 'treɪn', 'treɪn', 'Next train.', '下一班列车。'],
    ['Transfer', '换乘', 'trænsˈfɜːr', 'trænsˈfɜː', 'Transfer here.', '在这里换乘。'],
    ['Platform', '站台', 'ˈplætfɔːrm', 'ˈplætfɔːm', 'Wait on platform.', '在站台等。'],
    ['Fast', '快', 'fæst', 'fɑːst', 'Subway is fast.', '地铁很快。']
  ],
  'traffic': [
    ['Light', '灯', 'laɪt', 'laɪt', 'Traffic light.', '红绿灯。'],
    ['Sign', '标志', 'saɪn', 'saɪn', 'Stop sign.', '停车标志。'],
    ['Jam', '堵塞', 'dʒæm', 'dʒæm', 'Traffic jam.', '交通堵塞。'],
    ['Road', '路', 'roʊd', 'rəʊd', 'Bumpy road.', '颠簸的路。'],
    ['Street', '街道', 'striːt', 'striːt', 'One way street.', '单行道。'],
    ['Crosswalk', '斑马线', 'ˈkrɔːswɔːk', 'ˈkrɒswɔːk', 'Use crosswalk.', '走斑马线。'],
    ['Police', '警察', 'pəˈliːs', 'pəˈliːs', 'Traffic police.', '交警。'],
    ['Car', '车', 'kɑːr', 'kɑː', 'Fast car.', '快车。'],
    ['Bike', '自行车', 'baɪk', 'baɪk', 'Ride a bike.', '骑自行车。'],
    ['Pedestrian', '行人', 'pəˈdestriən', 'pəˈdestriən', 'Watch pedestrians.', '注意行人。']
  ],
  // 4. Health
  'hospital': [
    ['Doctor', '医生', 'ˈdɑːktər', 'ˈdɒktə', 'See a doctor.', '看医生。'],
    ['Nurse', '护士', 'nɜːrs', 'nɜːs', 'Call the nurse.', '叫护士。'],
    ['Room', '病房', 'ruːm', 'ruːm', 'Hospital room.', '病房。'],
    ['Bed', '床', 'bed', 'bed', 'Hospital bed.', '病床。'],
    ['Emergency', '急诊', 'iˈmɜːrdʒənsi', 'iˈmɜːdʒənsi', 'Emergency room.', '急诊室。'],
    ['Surgery', '手术', 'ˈsɜːrdʒəri', 'ˈsɜːdʒəri', 'Need surgery.', '需要手术。'],
    ['X-ray', 'X光', 'ˈeks reɪ', 'ˈeks reɪ', 'Chest X-ray.', '胸部X光。'],
    ['Blood', '血', 'blʌd', 'blʌd', 'Blood test.', '验血。'],
    ['Pain', '痛', 'peɪn', 'peɪn', 'Severe pain.', '剧痛。'],
    ['Mask', '口罩', 'mæsk', 'mɑːsk', 'Wear a mask.', '戴口罩。']
  ],
  'pharmacy': [
    ['Medicine', '药', 'ˈmedɪsn', 'ˈmedɪsn', 'Buy medicine.', '买药。'],
    ['Pill', '药丸', 'pɪl', 'pɪl', 'Take a pill.', '吃药丸。'],
    ['Prescription', '处方', 'prɪˈskrɪpʃn', 'prɪˈskrɪpʃn', 'Doctor prescription.', '医生处方。'],
    ['Vitamin', '维生素', 'ˈvaɪtəmɪn', 'ˈvɪtəmɪn', 'Vitamin C.', '维生素C。'],
    ['Syrup', '糖浆', 'ˈsɪrəp', 'ˈsɪrəp', 'Cough syrup.', '止咳糖浆。'],
    ['Cream', '药膏', 'kriːm', 'kriːm', 'Skin cream.', '皮肤药膏。'],
    ['Bandage', '绷带', 'ˈbændɪdʒ', 'ˈbændɪdʒ', 'Apply bandage.', '贴绷带。'],
    ['Shelf', '货架', 'ʃelf', 'ʃelf', 'On the shelf.', '在货架上。'],
    ['Pharmacist', '药剂师', 'ˈfɑːrməsɪst', 'ˈfɑːməsɪst', 'Ask pharmacist.', '问药剂师。'],
    ['Dose', '剂量', 'doʊs', 'dəʊs', 'Daily dose.', '每日剂量。']
  ],
  'dentist': [
    ['Tooth', '牙齿', 'tuːθ', 'tuːθ', 'Aching tooth.', '牙疼。'],
    ['Brush', '刷', 'brʌʃ', 'brʌʃ', 'Brush teeth.', '刷牙。'],
    ['Drill', '钻', 'drɪl', 'drɪl', 'Dentist drill.', '牙钻。'],
    ['Cavity', '蛀牙', 'ˈkævəti', 'ˈkævəti', 'Fill cavity.', '补牙。'],
    ['Chair', '椅子', 'tʃer', 'tʃeə', 'Dentist chair.', '牙科椅。'],
    ['Smile', '微笑', 'smaɪl', 'smaɪl', 'Nice smile.', '好看的微笑。'],
    ['Open', '张开', 'ˈoʊpən', 'ˈəʊpən', 'Open mouth.', '张嘴。'],
    ['Clean', '清洁', 'kliːn', 'kliːn', 'Clean teeth.', '洁牙。'],
    ['Gum', '牙龈', 'ɡʌm', 'ɡʌm', 'Bleeding gums.', '牙龈出血。'],
    ['Appointment', '预约', 'əˈpɔɪntmənt', 'əˈpɔɪntmənt', 'Dental appointment.', '牙科预约。']
  ],
  'illness': [
    ['Cold', '感冒', 'koʊld', 'kəʊld', 'Catch a cold.', '得感冒。'],
    ['Fever', '发烧', 'ˈfiːvər', 'ˈfiːvə', 'High fever.', '高烧。'],
    ['Cough', '咳嗽', 'kɔːf', 'kɒf', 'Bad cough.', '剧烈咳嗽。'],
    ['Flu', '流感', 'fluː', 'fluː', 'The flu.', '流感。'],
    ['Headache', '头痛', 'ˈhedeɪk', 'ˈhedeɪk', 'Splitting headache.', '头痛欲裂。'],
    ['Sneeze', '打喷嚏', 'sniːz', 'sniːz', 'Sneeze loud.', '大声打喷嚏。'],
    ['Rest', '休息', 'rest', 'rest', 'Get some rest.', '休息一下。'],
    ['Sick', '生病', 'sɪk', 'sɪk', 'Feel sick.', '感觉恶心。'],
    ['Virus', '病毒', 'ˈvaɪrəs', 'ˈvaɪrəs', 'Fight virus.', '对抗病毒。'],
    ['Sore', '痛', 'sɔːr', 'sɔː', 'Sore throat.', '嗓子痛。']
  ],
  'fitness': [
    ['Gym', '健身房', 'dʒɪm', 'dʒɪm', 'Go to gym.', '去健身房。'],
    ['Run', '跑', 'rʌn', 'rʌn', 'Run fast.', '跑得快。'],
    ['Weight', '重量', 'weɪt', 'weɪt', 'Lift weights.', '举重。'],
    ['Yoga', '瑜伽', 'ˈjoʊɡə', 'ˈjəʊɡə', 'Do yoga.', '做瑜伽。'],
    ['Mat', '垫子', 'mæt', 'mæt', 'Yoga mat.', '瑜伽垫。'],
    ['Stretch', '伸展', 'stretʃ', 'stretʃ', 'Stretch body.', '伸展身体。'],
    ['Muscle', '肌肉', 'ˈmʌsl', 'ˈmʌsl', 'Strong muscle.', '强壮的肌肉。'],
    ['Sweat', '汗', 'swet', 'swet', 'Sweat a lot.', '出很多汗。'],
    ['Healthy', '健康', 'ˈhelθi', 'ˈhelθi', 'Healthy body.', '健康的身体。'],
    ['Water', '水', 'ˈwɔːtər', 'ˈwɔːtə', 'Drink water.', '喝水。']
  ],
  // 5. Work & Education
  'office': [
    ['Desk', '桌子', 'desk', 'desk', 'Office desk.', '办公桌。'],
    ['Computer', '电脑', 'kəmˈpjuːtər', 'kəmˈpjuːtə', 'Work on computer.', '在电脑上工作。'],
    ['Chair', '椅子', 'tʃer', 'tʃeə', 'Swivel chair.', '转椅。'],
    ['Boss', '老板', 'bɔːs', 'bɒs', 'My boss.', '我的老板。'],
    ['Meeting', '会议', 'ˈmiːtɪŋ', 'ˈmiːtɪŋ', 'Long meeting.', '长会。'],
    ['Email', '邮件', 'ˈiːmeɪl', 'ˈiːmeɪl', 'Send email.', '发邮件。'],
    ['Phone', '电话', 'foʊn', 'fəʊn', 'Answer phone.', '接电话。'],
    ['Colleague', '同事', 'ˈkɑːliːɡ', 'ˈkɒliːɡ', 'Nice colleague.', '好同事。'],
    ['Printer', '打印机', 'ˈprɪntər', 'ˈprɪntə', 'Use printer.', '用打印机。'],
    ['Paper', '纸', 'ˈpeɪpər', 'ˈpeɪpə', 'White paper.', '白纸。']
  ],
  'meeting': [
    ['Room', '房间', 'ruːm', 'ruːm', 'Meeting room.', '会议室。'],
    ['Agenda', '议程', 'əˈdʒendə', 'əˈdʒendə', 'Meeting agenda.', '会议议程。'],
    ['Idea', '想法', 'aɪˈdiːə', 'aɪˈdɪə', 'Good idea.', '好主意。'],
    ['Talk', '谈话', 'tɔːk', 'tɔːk', 'Talk loud.', '大声说。'],
    ['Notes', '笔记', 'noʊts', 'nəʊts', 'Take notes.', '记笔记。'],
    ['Presentation', '展示', 'ˌpreznˈteɪʃn', 'ˌpreznˈteɪʃn', 'Give presentation.', '做展示。'],
    ['Projector', '投影仪', 'prəˈdʒektər', 'prəˈdʒektə', 'Turn on projector.', '开投影仪。'],
    ['Team', '团队', 'tiːm', 'tiːm', 'Work team.', '工作团队。'],
    ['Goal', '目标', 'ɡoʊl', 'ɡəʊl', 'Set goal.', '设定目标。'],
    ['Time', '时间', 'taɪm', 'taɪm', 'On time.', '准时。']
  ],
  'school': [
    ['Teacher', '老师', 'ˈtiːtʃər', 'ˈtiːtʃə', 'Ask teacher.', '问老师。'],
    ['Student', '学生', 'ˈstuːdnt', 'ˈstjuːdnt', 'Good student.', '好学生。'],
    ['Class', '班级', 'klæs', 'klɑːs', 'English class.', '英语课。'],
    ['Book', '书', 'bʊk', 'bʊk', 'Text book.', '教科书。'],
    ['Pen', '笔', 'pen', 'pen', 'Blue pen.', '蓝笔。'],
    ['Exam', '考试', 'ɪɡˈzæm', 'ɪɡˈzæm', 'Hard exam.', '难考。'],
    ['Homework', '作业', 'ˈhoʊmwɜːrk', 'ˈhəʊmwɜːk', 'Do homework.', '做作业。'],
    ['Bag', '包', 'bæɡ', 'bæɡ', 'School bag.', '书包。'],
    ['Board', '黑板', 'bɔːrd', 'bɔːd', 'White board.', '白板。'],
    ['Learn', '学习', 'lɜːrn', 'lɜːn', 'Learn fast.', '学得快。']
  ],
  'library': [
    ['Quiet', '安静', 'ˈkwaɪət', 'ˈkwaɪət', 'Be quiet.', '保持安静。'],
    ['Shelf', '书架', 'ʃelf', 'ʃelf', 'Book shelf.', '书架。'],
    ['Read', '读', 'riːd', 'riːd', 'Read books.', '读书。'],
    ['Librarian', '管理员', 'laɪˈbreriən', 'laɪˈbreəriən', 'Ask librarian.', '问管理员。'],
    ['Card', '卡', 'kɑːrd', 'kɑːd', 'Library card.', '借书证。'],
    ['Table', '桌子', 'ˈteɪbl', 'ˈteɪbl', 'Study table.', '学习桌。'],
    ['Borrow', '借', 'ˈbɑːroʊ', 'ˈbɒrəʊ', 'Borrow book.', '借书。'],
    ['Return', '还', 'rɪˈtɜːrn', 'rɪˈtɜːn', 'Return book.', '还书。'],
    ['Study', '学习', 'ˈstʌdi', 'ˈstʌdi', 'Study hard.', '努力学习。'],
    ['Computer', '电脑', 'kəmˈpjuːtər', 'kəmˈpjuːtə', 'Public computer.', '公共电脑。']
  ],
  // 6. Shopping
  'shopping_mall': [
    ['Shop', '商店', 'ʃɑːp', 'ʃɒp', 'Big shop.', '大商店。'],
    ['Bag', '袋子', 'bæɡ', 'bæɡ', 'Shopping bag.', '购物袋。'],
    ['Sale', '特卖', 'seɪl', 'seɪl', 'Big sale.', '大减价。'],
    ['Cash', '现金', 'kæʃ', 'kæʃ', 'Pay cash.', '付现金。'],
    ['Credit card', '信用卡', 'ˈkredɪt kɑːrd', 'ˈkredɪt kɑːd', 'Use credit card.', '用信用卡。'],
    ['Price', '价格', 'praɪs', 'praɪs', 'Good price.', '好价格。'],
    ['Clothes', '衣服', 'kloʊðz', 'kləʊðz', 'New clothes.', '新衣服。'],
    ['Customer', '顾客', 'ˈkʌstəmər', 'ˈkʌstəmə', 'Happy customer.', '快乐顾客。'],
    ['Elevator', '电梯', 'ˈelɪveɪtər', 'ˈelɪveɪtə', 'Glass elevator.', '玻璃电梯。'],
    ['Open', '开', 'ˈoʊpən', 'ˈəʊpən', 'Store opens.', '商店开门。']
  ],
  'clothing_store': [
    ['Shirt', '衬衫', 'ʃɜːrt', 'ʃɜːt', 'Blue shirt.', '蓝衬衫。'],
    ['Pants', '裤子', 'pænts', 'pænts', 'Long pants.', '长裤。'],
    ['Dress', '裙子', 'dres', 'dres', 'Red dress.', '红裙子。'],
    ['Size', '尺码', 'saɪz', 'saɪz', 'Wrong size.', '错尺码。'],
    ['Fitting room', '试衣间', 'ˈfɪtɪŋ ruːm', 'ˈfɪtɪŋ ruːm', 'Try in fitting room.', '在试衣间试。'],
    ['Mirror', '镜子', 'ˈmɪrər', 'ˈmɪrə', 'Full mirror.', '全身镜。'],
    ['Jacket', '夹克', 'ˈdʒækɪt', 'ˈdʒækɪt', 'Warm jacket.', '暖夹克。'],
    ['Shoes', '鞋', 'ʃuːz', 'ʃuːz', 'New shoes.', '新鞋。'],
    ['Hat', '帽子', 'hæt', 'hæt', 'Cool hat.', '酷帽子。'],
    ['Buy', '买', 'baɪ', 'baɪ', 'Buy it.', '买下它。']
  ],
  // 7. Leisure
  'movies': [
    ['Ticket', '票', 'ˈtɪkɪt', 'ˈtɪkɪt', 'Movie ticket.', '电影票。'],
    ['Popcorn', '爆米花', 'ˈpɑːpkɔːrn', 'ˈpɒpkɔːn', 'Eat popcorn.', '吃爆米花。'],
    ['Screen', '屏幕', 'skriːn', 'skriːn', 'Big screen.', '大屏幕。'],
    ['Seat', '座位', 'siːt', 'siːt', 'Best seat.', '最好座位。'],
    ['Action', '动作', 'ˈækʃn', 'ˈækʃn', 'Action movie.', '动作片。'],
    ['Comedy', '喜剧', 'ˈkɑːmədi', 'ˈkɒmədi', 'Funny comedy.', '搞笑喜剧。'],
    ['Actor', '演员', 'ˈæktər', 'ˈæktə', 'Famous actor.', '著名演员。'],
    ['Dark', '黑', 'dɑːrk', 'dɑːk', 'It is dark.', '里面很黑。'],
    ['Sound', '声音', 'saʊnd', 'saʊnd', 'Loud sound.', '大声音。'],
    ['3D', '3D', 'ˌθriː ˈdiː', 'ˌθriː ˈdiː', '3D glasses.', '3D眼镜。']
  ],
  'park': [
    ['Bench', '长椅', 'bentʃ', 'bentʃ', 'Sit on bench.', '坐长椅上。'],
    ['Tree', '树', 'triː', 'triː', 'Green tree.', '绿树。'],
    ['Grass', '草', 'ɡræs', 'ɡrɑːs', 'Sit on grass.', '坐草地上。'],
    ['Walk', '走', 'wɔːk', 'wɔːk', 'Take a walk.', '散步。'],
    ['Dog', '狗', 'dɔːɡ', 'dɒɡ', 'Walk the dog.', '遛狗。'],
    ['Play', '玩', 'pleɪ', 'pleɪ', 'Kids play.', '孩子玩耍。'],
    ['Flower', '花', 'ˈflaʊər', 'ˈflaʊə', 'Smell flower.', '闻花香。'],
    ['Bird', '鸟', 'bɜːrd', 'bɜːd', 'Singing bird.', '唱歌的鸟。'],
    ['Picnic', '野餐', 'ˈpɪknɪk', 'ˈpɪknɪk', 'Have a picnic.', '去野餐。'],
    ['Sun', '太阳', 'sʌn', 'sʌn', 'Bright sun.', '明亮太阳。']
  ],
  'beach': [
    ['Sand', '沙子', 'sænd', 'sænd', 'White sand.', '白沙。'],
    ['Sea', '海', 'siː', 'siː', 'Blue sea.', '蓝海。'],
    ['Sun', '太阳', 'sʌn', 'sʌn', 'Hot sun.', '烈日。'],
    ['Swim', '游泳', 'swɪm', 'swɪm', 'Swim in sea.', '海里游泳。'],
    ['Towel', '毛巾', 'ˈtaʊəl', 'ˈtaʊəl', 'Beach towel.', '沙滩巾。'],
    ['Umbrella', '伞', 'ʌmˈbrelə', 'ʌmˈbrelə', 'Beach umbrella.', '沙滩伞。'],
    ['Shell', '贝壳', 'ʃel', 'ʃel', 'Sea shell.', '贝壳。'],
    ['Wave', '浪', 'weɪv', 'weɪv', 'Big wave.', '大浪。'],
    ['Boat', '船', 'boʊt', 'bəʊt', 'Sail boat.', '帆船。'],
    ['Relax', '放松', 'rɪˈlæks', 'rɪˈlæks', 'Relax here.', '这里放松。']
  ],
  'zoo': [
    ['Lion', '狮子', 'ˈlaɪən', 'ˈlaɪən', 'Big lion.', '大狮子。'],
    ['Tiger', '老虎', 'ˈtaɪɡər', 'ˈtaɪɡə', 'Striped tiger.', '条纹虎。'],
    ['Monkey', '猴子', 'ˈmʌŋki', 'ˈmʌŋki', 'Funny monkey.', '滑稽猴子。'],
    ['Bear', '熊', 'ber', 'beə', 'Brown bear.', '棕熊。'],
    ['Elephant', '大象', 'ˈelɪfənt', 'ˈelɪfənt', 'Grey elephant.', '灰大象。'],
    ['Giraffe', '长颈鹿', 'dʒəˈræf', 'dʒəˈrɑːf', 'Tall giraffe.', '高长颈鹿。'],
    ['Snake', '蛇', 'sneɪk', 'sneɪk', 'Long snake.', '长蛇。'],
    ['Bird', '鸟', 'bɜːrd', 'bɜːd', 'Colorful bird.', '多彩鸟。'],
    ['Cage', '笼子', 'keɪdʒ', 'keɪdʒ', 'In the cage.', '在笼子里。'],
    ['Ticket', '票', 'ˈtɪkɪt', 'ˈtɪkɪt', 'Zoo ticket.', '动物园票。']
  ],
  'sports': [
    ['Ball', '球', 'bɔːl', 'bɔːl', 'Kick the ball.', '踢球。'],
    ['Run', '跑', 'rʌn', 'rʌn', 'Run fast.', '快跑。'],
    ['Jump', '跳', 'dʒʌmp', 'dʒʌmp', 'Jump high.', '跳得高。'],
    ['Team', '队', 'tiːm', 'tiːm', 'My team.', '我的队。'],
    ['Game', '比赛', 'ɡeɪm', 'ɡeɪm', 'Win the game.', '赢比赛。'],
    ['Score', '得分', 'skɔːr', 'skɔː', 'Score a goal.', '进球。'],
    ['Player', '队员', 'ˈpleɪər', 'ˈpleɪə', 'Best player.', '最佳队员。'],
    ['Coach', '教练', 'koʊtʃ', 'kəʊtʃ', 'Listen to coach.', '听教练的。'],
    ['Stadium', '体育场', 'ˈsteɪdiəm', 'ˈsteɪdiəm', 'Big stadium.', '大体育场。'],
    ['Fan', '球迷', 'fæn', 'fæn', 'Soccer fan.', '足球迷。']
  ],
  'music': [
    ['Song', '歌', 'sɔːŋ', 'sɒŋ', 'Sing a song.', '唱首歌。'],
    ['Listen', '听', 'ˈlɪsn', 'ˈlɪsn', 'Listen to music.', '听音乐。'],
    ['Guitar', '吉他', 'ɡɪˈtɑːr', 'ɡɪˈtɑː', 'Play guitar.', '弹吉他。'],
    ['Piano', '钢琴', 'piˈænoʊ', 'piˈænəʊ', 'Play piano.', '弹钢琴。'],
    ['Drums', '鼓', 'drʌmz', 'drʌmz', 'Hit drums.', '打鼓。'],
    ['Band', '乐队', 'bænd', 'bænd', 'Rock band.', '摇滚乐队。'],
    ['Concert', '音乐会', 'ˈkɑːnsərt', 'ˈkɒnsət', 'Live concert.', '现场音乐会。'],
    ['Loud', '大声', 'laʊd', 'laʊd', 'Loud music.', '大声音乐。'],
    ['Dance', '跳舞', 'dæns', 'dɑːns', 'Dance to music.', '随音乐跳舞。'],
    ['Singer', '歌手', 'ˈsɪŋər', 'ˈsɪŋə', 'Good singer.', '好歌手。']
  ],
  // 8. Miscellaneous
  'weather': [
    ['Sun', '太阳', 'sʌn', 'sʌn', 'Sunny day.', '晴天。'],
    ['Rain', '雨', 'reɪn', 'reɪn', 'Heavy rain.', '大雨。'],
    ['Cloud', '云', 'klaʊd', 'klaʊd', 'White cloud.', '白云。'],
    ['Wind', '风', 'wɪnd', 'wɪnd', 'Strong wind.', '大风。'],
    ['Snow', '雪', 'snoʊ', 'snəʊ', 'White snow.', '白雪。'],
    ['Hot', '热', 'hɑːt', 'hɒt', 'Hot weather.', '热天气。'],
    ['Cold', '冷', 'koʊld', 'kəʊld', 'Cold winter.', '冷冬天。'],
    ['Storm', '风暴', 'stɔːrm', 'stɔːm', 'Big storm.', '大风暴。'],
    ['Umbrella', '伞', 'ʌmˈbrelə', 'ʌmˈbrelə', 'Use umbrella.', '用伞。'],
    ['Sky', '天', 'skaɪ', 'skaɪ', 'Blue sky.', '蓝天。']
  ],
  'colors': [
    ['Red', '红', 'red', 'red', 'Red apple.', '红苹果。'],
    ['Blue', '蓝', 'bluː', 'bluː', 'Blue sky.', '蓝天。'],
    ['Green', '绿', 'ɡriːn', 'ɡriːn', 'Green grass.', '绿草。'],
    ['Yellow', '黄', 'ˈjeloʊ', 'ˈjeləʊ', 'Yellow sun.', '黄太阳。'],
    ['Black', '黑', 'blæk', 'blæk', 'Black cat.', '黑猫。'],
    ['White', '白', 'waɪt', 'waɪt', 'White snow.', '白雪。'],
    ['Orange', '橙', 'ˈɔːrɪndʒ', 'ˈɒrɪndʒ', 'Orange fruit.', '橙色水果。'],
    ['Purple', '紫', 'ˈpɜːrpl', 'ˈpɜːpl', 'Purple flower.', '紫花。'],
    ['Pink', '粉', 'pɪŋk', 'pɪŋk', 'Pink dress.', '粉裙子。'],
    ['Brown', '棕', 'braʊn', 'braʊn', 'Brown bear.', '棕熊。']
  ],
  'numbers': [
    ['One', '一', 'wʌn', 'wʌn', 'One apple.', '一个苹果。'],
    ['Two', '二', 'tuː', 'tuː', 'Two hands.', '两只手。'],
    ['Three', '三', 'θriː', 'θriː', 'Three birds.', '三只鸟。'],
    ['Four', '四', 'fɔːr', 'fɔː', 'Four legs.', '四条腿。'],
    ['Five', '五', 'faɪv', 'faɪv', 'Five fingers.', '五根手指。'],
    ['Ten', '十', 'ten', 'ten', 'Ten toes.', '十个脚趾。'],
    ['Hundred', '百', 'ˈhʌndrəd', 'ˈhʌndrəd', 'One hundred.', '一百。'],
    ['First', '第一', 'fɜːrst', 'fɜːst', 'First place.', '第一名。'],
    ['Last', '最后', 'læst', 'lɑːst', 'Last one.', '最后一个。'],
    ['Count', '数', 'kaʊnt', 'kaʊnt', 'Count numbers.', '数数。']
  ],
  'time': [
    ['Clock', '钟', 'klɑːk', 'klɒk', 'Wall clock.', '挂钟。'],
    ['Watch', '手表', 'wɑːtʃ', 'wɒtʃ', 'Wrist watch.', '手表。'],
    ['Hour', '小时', 'ˈaʊər', 'ˈaʊə', 'One hour.', '一小时。'],
    ['Minute', '分钟', 'ˈmɪnɪt', 'ˈmɪnɪt', 'Five minutes.', '五分钟。'],
    ['Second', '秒', 'ˈsekənd', 'ˈsekənd', 'Wait a second.', '等一秒。'],
    ['Morning', '早上', 'ˈmɔːrnɪŋ', 'ˈmɔːnɪŋ', 'Good morning.', '早上好。'],
    ['Night', '晚上', 'naɪt', 'naɪt', 'Good night.', '晚安。'],
    ['Late', '晚', 'leɪt', 'leɪt', 'Do not be late.', '别迟到。'],
    ['Early', '早', 'ˈɜːrli', 'ˈɜːli', 'Wake early.', '早起。'],
    ['Now', '现在', 'naʊ', 'naʊ', 'Do it now.', '现在做。']
  ],
  'family': [
    ['Mother', '母亲', 'ˈmʌðər', 'ˈmʌðə', 'Love mother.', '爱母亲。'],
    ['Father', '父亲', 'ˈfɑːðər', 'ˈfɑːðə', 'Ask father.', '问父亲。'],
    ['Sister', '姐妹', 'ˈsɪstər', 'ˈsɪstə', 'My sister.', '我妹妹。'],
    ['Brother', '兄弟', 'ˈbrʌðər', 'ˈbrʌðə', 'Big brother.', '哥哥。'],
    ['Grandma', '奶奶', 'ˈɡrænmɑː', 'ˈɡrænmɑː', 'Old grandma.', '老奶奶。'],
    ['Grandpa', '爷爷', 'ˈɡrænpɑː', 'ˈɡrænpɑː', 'Kind grandpa.', '慈祥的爷爷。'],
    ['Baby', '婴儿', 'ˈbeɪbi', 'ˈbeɪbi', 'Cute baby.', '可爱的婴儿。'],
    ['Son', '儿子', 'sʌn', 'sʌn', 'My son.', '我儿子。'],
    ['Daughter', '女儿', 'ˈdɔːtər', 'ˈdɔːtə', 'My daughter.', '我女儿。'],
    ['Family', '家庭', 'ˈfæməli', 'ˈfæməli', 'Big family.', '大家庭。']
  ],
  'makeup': [
    ['Lipstick', '口红', 'ˈlɪpstɪk', 'ˈlɪpstɪk', 'Red lipstick.', '红口红。'],
    ['Brush', '刷子', 'brʌʃ', 'brʌʃ', 'Makeup brush.', '化妆刷。'],
    ['Powder', '粉', 'ˈpaʊdər', 'ˈpaʊdə', 'Face powder.', '散粉。'],
    ['Mirror', '镜子', 'ˈmɪrər', 'ˈmɪrə', 'Small mirror.', '小镜子。'],
    ['Eye', '眼', 'aɪ', 'aɪ', 'Eye shadow.', '眼影。'],
    ['Face', '脸', 'feɪs', 'feɪs', 'Wash face.', '洗脸。'],
    ['Perfume', '香水', 'pərˈfjuːm', 'ˈpɜːfjuːm', 'Smell perfume.', '闻香水。'],
    ['Nail', '指甲', 'neɪl', 'neɪl', 'Red nails.', '红指甲。'],
    ['Cream', '霜', 'kriːm', 'kriːm', 'Face cream.', '面霜。'],
    ['Beautiful', '美', 'ˈbjuːtɪfl', 'ˈbjuːtɪfl', 'Look beautiful.', '看起来很美。']
  ],
  'hair_salon': [
    ['Cut', '剪', 'kʌt', 'kʌt', 'Cut hair.', '剪头发。'],
    ['Wash', '洗', 'wɔːʃ', 'wɒʃ', 'Wash hair.', '洗头。'],
    ['Dry', '吹', 'draɪ', 'draɪ', 'Dry hair.', '吹干。'],
    ['Dye', '染', 'daɪ', 'daɪ', 'Dye hair.', '染发。'],
    ['Short', '短', 'ʃɔːrt', 'ʃɔːt', 'Short hair.', '短发。'],
    ['Long', '长', 'lɔːŋ', 'lɒŋ', 'Long hair.', '长发。'],
    ['Comb', '梳', 'koʊm', 'kəʊm', 'Use a comb.', '用梳子。'],
    ['Barber', '理发师', 'ˈbɑːrbər', 'ˈbɑːbə', 'Good barber.', '好理发师。'],
    ['Style', '发型', 'staɪl', 'staɪl', 'New style.', '新发型。'],
    ['Chair', '椅子', 'tʃer', 'tʃeə', 'Sit in chair.', '坐椅子上。']
  ],
  'camping': [
    ['Tent', '帐篷', 'tent', 'tent', 'Sleep in tent.', '睡帐篷。'],
    ['Fire', '火', 'faɪər', 'faɪə', 'Camp fire.', '营火。'],
    ['Bag', '袋', 'bæɡ', 'bæɡ', 'Sleeping bag.', '睡袋。'],
    ['Forest', '森林', 'ˈfɔːrɪst', 'ˈfɒrɪst', 'Green forest.', '绿森林。'],
    ['Map', '地图', 'mæp', 'mæp', 'Read map.', '看地图。'],
    ['Walk', '走', 'wɔːk', 'wɔːk', 'Walk in woods.', '林中漫步。'],
    ['Moon', '月亮', 'muːn', 'muːn', 'Bright moon.', '明月。'],
    ['Star', '星星', 'stɑːr', 'stɑː', 'Look at stars.', '看星星。'],
    ['Bug', '虫', 'bʌɡ', 'bʌɡ', 'Small bug.', '小虫子。'],
    ['Fun', '有趣', 'fʌn', 'fʌn', 'Camping is fun.', '露营有趣。']
  ],
  'space': [
    ['Moon', '月亮', 'muːn', 'muːn', 'Full moon.', '满月。'],
    ['Sun', '太阳', 'sʌn', 'sʌn', 'Hot sun.', '热太阳。'],
    ['Star', '星星', 'stɑːr', 'stɑː', 'Shining star.', '闪亮的星。'],
    ['Planet', '行星', 'ˈplænɪt', 'ˈplænɪt', 'Blue planet.', '蓝色行星。'],
    ['Rocket', '火箭', 'ˈrɑːkɪt', 'ˈrɒkɪt', 'Fast rocket.', '快火箭。'],
    ['Earth', '地球', 'ɜːrθ', 'ɜːθ', 'Mother Earth.', '地球母亲。'],
    ['Space', '太空', 'speɪs', 'speɪs', 'Deep space.', '深空。'],
    ['Fly', '飞', 'flaɪ', 'flaɪ', 'Fly high.', '飞高。'],
    ['Dark', '黑', 'dɑːrk', 'dɑːk', 'Dark sky.', '黑天。'],
    ['Alien', '外星人', 'ˈeɪliən', 'ˈeɪliən', 'Green alien.', '绿外星人。']
  ]
};

// Map keywords to dictionary keys
const sceneConfig: Record<string, string[]> = {
  // 1. Home
  'morning_routine': ['morning', 'wake', 'routine', 'breakfast', 'alarm', '晨间', '起床', '早上', '闹钟'],
  'bedroom': ['bedroom', 'sleep', 'bed', 'rest', 'room', '卧室', '睡觉', '床', '房间'],
  'kitchen': ['kitchen', 'cook', 'food', 'stove', 'fridge', '厨房', '做饭', '冰箱'],
  'bathroom': ['bathroom', 'wash', 'toilet', 'shower', 'clean', '卫生间', '洗澡', '厕所', '浴室'],
  'living_room': ['living', 'room', 'sofa', 'tv', 'relax', '客厅', '沙发', '电视'],
  'house_cleaning': ['clean', 'house', 'broom', 'mop', 'chore', '打扫', '清洁', '家务', '干净'],
  'laundry': ['laundry', 'wash', 'clothes', 'dry', 'iron', '洗衣', '衣服', '烘干', '熨烫'],
  'gardening': ['garden', 'flower', 'plant', 'tree', 'grow', '花园', '种花', '植物', '园艺'],
  
  // 2. Food
  'breakfast': ['breakfast', 'morning', 'eat', 'egg', 'toast', '早餐', '早饭', '吃'],
  'lunch': ['lunch', 'noon', 'eat', 'sandwich', 'burger', '午餐', '午饭'],
  'dinner': ['dinner', 'evening', 'eat', 'steak', 'wine', '晚餐', '晚饭'],
  'supermarket': ['supermarket', 'market', 'buy', 'grocery', 'food', 'shop', '超市', '买菜', '购物'],
  'drinks': ['drink', 'water', 'tea', 'coffee', 'bar', '喝', '饮料', '水', '茶'],
  'fruits': ['fruit', 'apple', 'banana', 'healthy', 'sweet', '水果', '苹果', '香蕉'],
  'vegetables': ['vegetable', 'carrot', 'salad', 'healthy', 'green', '蔬菜', '胡萝卜', '沙拉'],
  'restaurant': ['restaurant', 'dining', 'eat', 'menu', 'waiter', '餐厅', '饭馆', '吃饭'],
  'cafe': ['cafe', 'coffee', 'tea', 'drink', 'relax', '咖啡馆', '咖啡店', '下午茶'],
  'fast_food': ['fast', 'food', 'burger', 'fries', 'quick', '快餐', '汉堡', '薯条'],

  // 3. Travel
  'airport': ['airport', 'fly', 'travel', 'plane', 'luggage', '机场', '飞', '旅行', '行李'],
  'airplane': ['airplane', 'plane', 'fly', 'sky', 'seat', '飞机', '航班', '空中'],
  'hotel': ['hotel', 'room', 'stay', 'bed', 'reception', '酒店', '旅馆', '住宿'],
  'train_station': ['train', 'station', 'rail', 'ticket', 'track', '火车站', '火车', '高铁'],
  'taxi': ['taxi', 'car', 'cab', 'driver', 'ride', '出租车', '的士', '打车'],
  'bus': ['bus', 'stop', 'public', 'transport', 'ride', '公交车', '巴士', '公车'],
  'subway': ['subway', 'metro', 'underground', 'train', 'station', '地铁', '捷运', '轻轨'],
  'traffic': ['traffic', 'road', 'street', 'car', 'drive', '交通', '马路', '开车', '堵车'],

  // 4. Health
  'hospital': ['hospital', 'doctor', 'nurse', 'sick', 'emergency', '医院', '医生', '生病', '急诊'],
  'pharmacy': ['pharmacy', 'medicine', 'drug', 'pill', 'store', '药房', '药店', '买药'],
  'dentist': ['dentist', 'tooth', 'teeth', 'mouth', 'pain', '牙医', '牙科', '牙齿', '看牙'],
  'illness': ['sick', 'ill', 'cold', 'flu', 'fever', 'pain', '生病', '感冒', '发烧', '不舒服'],
  'fitness': ['gym', 'sport', 'exercise', 'workout', 'healthy', 'run', '健身', '运动', '锻炼'],

  // 5. Work
  'office': ['office', 'work', 'job', 'computer', 'desk', '办公室', '工作', '上班'],
  'meeting': ['meeting', 'talk', 'business', 'room', 'discuss', '会议', '开会', '讨论'],
  'school': ['school', 'class', 'student', 'teacher', 'learn', '学校', '上学', '课堂', '学生'],
  'library': ['library', 'book', 'read', 'quiet', 'study', '图书馆', '看书', '借书'],

  // 6. Shopping
  'shopping_mall': ['mall', 'shop', 'buy', 'store', 'sale', '商场', '购物', '商店'],
  'clothing_store': ['clothes', 'fashion', 'wear', 'shirt', 'dress', '服装店', '买衣服', '穿'],

  // 7. Leisure
  'movies': ['movie', 'cinema', 'film', 'watch', 'theater', '电影', '看电影', '影院'],
  'park': ['park', 'walk', 'nature', 'tree', 'relax', '公园', '散步', '玩'],
  'beach': ['beach', 'sea', 'ocean', 'sand', 'swim', 'sun', '海滩', '沙滩', '海边', '游泳'],
  'zoo': ['zoo', 'animal', 'lion', 'wild', 'park', '动物园', '动物'],
  'sports': ['sport', 'game', 'play', 'ball', 'run', '运动', '比赛', '球'],
  'music': ['music', 'song', 'listen', 'concert', 'band', '音乐', '听歌', '唱歌'],

  // 8. Misc
  'weather': ['weather', 'rain', 'sun', 'snow', 'wind', 'sky', '天气', '下雨', '晴天'],
  'colors': ['color', 'red', 'blue', 'green', 'paint', '颜色', '色彩'],
  'numbers': ['number', 'count', 'math', 'one', 'two', '数字', '数数'],
  'time': ['time', 'clock', 'watch', 'hour', 'minute', '时间', '几点', '钟'],
  'family': ['family', 'parent', 'kid', 'love', 'home', '家庭', '家人', '亲戚'],
  'makeup': ['makeup', 'beauty', 'face', 'cosmetic', 'look', '化妆', '美妆', '美容'],
  'hair_salon': ['hair', 'cut', 'barber', 'style', 'salon', '理发', '剪头', '发型'],
  'camping': ['camp', 'tent', 'nature', 'outdoor', 'fire', '露营', '野营', '户外'],
  'space': ['space', 'moon', 'star', 'planet', 'universe', '太空', '宇宙', '星星']
};

export const searchLocalDictionary = (query: string): WordData[] | null => {
  const normalizedQuery = query.toLowerCase().trim();
  
  // 1. Try exact key match (fastest)
  if (rawDictionary[normalizedQuery]) {
    return expand(rawDictionary[normalizedQuery]);
  }

  // 2. Search in keywords (Fuzzy Match)
  for (const [key, keywords] of Object.entries(sceneConfig)) {
    if (keywords.some(k => normalizedQuery.includes(k) || k.includes(normalizedQuery))) {
      const rawData = rawDictionary[key];
      if (rawData) {
        return expand(rawData);
      }
    }
  }

  return null;
};

// Robust helper to get random words from ALL scenes
export const getRandomGlobalWords = (count: number): WordData[] => {
  const allScenes = Object.values(rawDictionary);
  if (allScenes.length === 0) return [];

  const allWordsRaw = allScenes.flat();
  
  // Shuffle all available words
  const shuffled = [...allWordsRaw].sort(() => 0.5 - Math.random());
  
  // Take the requested amount
  const selectedRaw = shuffled.slice(0, count);
  
  return expand(selectedRaw);
};

export const getScenarioSuggestions = (query: string): { key: string, label: string }[] => {
  if (!query || query.trim().length === 0) return [];
  const lowerQuery = query.toLowerCase().trim();
  const matches: { key: string, label: string }[] = [];

  for (const [key, keywords] of Object.entries(sceneConfig)) {
    const keyMatch = key.replace(/_/g, ' ').toLowerCase().includes(lowerQuery);
    const keywordMatch = keywords.some(k => k.toLowerCase().includes(lowerQuery));

    if (keyMatch || keywordMatch) {
        const title = key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const chineseKeyword = keywords.find(k => /[\u4e00-\u9fa5]/.test(k));
        const label = chineseKeyword ? `${title} (${chineseKeyword})` : title;
        matches.push({ key, label });
    }
  }
  return matches.slice(0, 8);
};

import 稻谷 from '@/assets/imgs/food/sandbox_1_wheat.png'
import 圆圆肉片 from '@/assets/imgs/food/sandbox_1_venison.png'
import 带腿骨肉 from '@/assets/imgs/food/sandbox_1_beef.png'
import 蟹钳 from '@/assets/imgs/food/sandbox_1_crab.png'
import 羽兽翅肉 from '@/assets/imgs/food/sandbox_1_poultry.png'
import 软骨肉块 from '@/assets/imgs/food/sandbox_1_ttlmeat.png'
import 晶肝茸髓 from '@/assets/imgs/food/sandbox_1_supermeat.png'
import wood_logo from '@/assets/imgs/resource/sandbox_1_wood.png'
import store_logo from '@/assets/imgs/resource/sandbox_1_stone.png'
import water_logo from '@/assets/imgs/resource/sandbox_1_water.png'
import iron_logo from '@/assets/imgs/resource/sandbox_1_iron.png'
import que_logo from '@/assets/imgs/resource/sandbox_1_goodsundry.png'
import { computed, ref } from 'vue'
import 奇妙糅合物 from '@/assets/imgs/markfood/奇妙糅合物.png'
import 蟹肉碎拌饭 from '@/assets/imgs/markfood/蟹肉碎拌饭.png'
import 调味干粮 from '@/assets/imgs/markfood/调味干粮.png'
import 松枝熏肉 from '@/assets/imgs/markfood/松枝熏肉.png'
import 鲜切蟹生 from '@/assets/imgs/markfood/鲜切蟹生.png'
import 真空冷制肉脍 from '@/assets/imgs/markfood/真空冷制肉脍.png'
import 炭烤兽肉卷饼 from '@/assets/imgs/markfood/炭烤兽肉卷饼.png'
import 猎人饭包 from '@/assets/imgs/markfood/猎人饭包.png'
import 超级厚馅饼 from '@/assets/imgs/markfood/超级厚馅饼.png'
import 鲜萃凝方体 from '@/assets/imgs/markfood/鲜萃凝方体.png'
import 香煎杂肉饭 from '@/assets/imgs/markfood/香煎杂肉饭.png'
import 脱水增味肉干 from '@/assets/imgs/markfood/脱水增味肉干.png'
import 低温鲜烹炙肉 from '@/assets/imgs/markfood/低温鲜烹炙肉.png'
import 蟹壳蒸饭 from '@/assets/imgs/markfood/蟹壳蒸饭.png'
import 提取脂凝晶 from '@/assets/imgs/markfood/提取脂凝晶.png'
import 浓缩羹原液 from '@/assets/imgs/markfood/浓缩羹原液.png'
import 高压复焗浓汤 from '@/assets/imgs/markfood/高压复焗浓汤.png'
import 生制代餐粗粉 from '@/assets/imgs/markfood/生制代餐粗粉.png'
import 脆肉薯条转醇 from '@/assets/imgs/markfood/脆肉薯条转醇.png'
import 蟹醇 from '@/assets/imgs/markfood/蟹醇.png'
import 鲜味汤凝胶 from '@/assets/imgs/markfood/鲜味汤凝胶.png'
import 转质壳酯块 from '@/assets/imgs/markfood/转质壳酯块.png'
import 复合精制肉酱 from '@/assets/imgs/markfood/复合精制肉酱.png'
import 碳水脂肪聚块 from '@/assets/imgs/markfood/碳水脂肪聚块.png'
import 味纯聚素粒 from '@/assets/imgs/markfood/味纯聚素粒.png'
import 莱塔尼亚浓汤鲜萃 from '@/assets/imgs/markfood/莱塔尼亚浓汤鲜萃.png'
import 鲜能剂 from '@/assets/imgs/markfood/鲜能剂.png'
import 极温速烹兽肉 from '@/assets/imgs/markfood/极温速烹兽肉.png'
import 东国纳米割烹 from '@/assets/imgs/markfood/东国纳米割烹.png'
import 维多利亚皇家凝方 from '@/assets/imgs/markfood/维多利亚皇家凝方.png'
import 炎国山水原液 from '@/assets/imgs/markfood/炎国山水原液.png'
import 卡西米尔骑士补充剂 from '@/assets/imgs/markfood/卡西米尔骑士补充剂.png'
import 哥伦比亚分子胶囊 from '@/assets/imgs/markfood/哥伦比亚分子胶囊.png'
import 拉特兰圣音汤醇 from '@/assets/imgs/markfood/拉特兰圣音汤醇.png'
import 低压干制精肉 from '@/assets/imgs/markfood/低压干制精肉.png'
import 米诺斯诗歌凝胶 from '@/assets/imgs/markfood/米诺斯诗歌凝胶.png'
import 固态源溏心蛋补剂 from '@/assets/imgs/markfood/固态源溏心蛋补剂.png'
import 河鳞水果凝胶 from '@/assets/imgs/markfood/河鳞水果凝胶.png'
import 炎国荒地菜肉酮 from '@/assets/imgs/markfood/炎国荒地菜肉酮.png'
import 音乐速烤萃取酯 from '@/assets/imgs/markfood/音乐速烤萃取酯.png'
import 哥伦比亚炮灰羽 from '@/assets/imgs/markfood/哥伦比亚炮灰羽.png'
import 香肠豆泥聚块 from '@/assets/imgs/markfood/香肠豆泥聚块.png'
import 部族狂欢晚宴 from '@/assets/imgs/markfood/部族狂欢晚宴.png'
import 中央谷地混合烤肉 from '@/assets/imgs/markfood/中央谷地混合烤肉.png'
import 雨林奇妙怪味糖 from '@/assets/imgs/markfood/雨林奇妙怪味糖.png'

function url(name) {
    const obj = new URL(`../assets/imgs/food/${name}.png`, import.meta.url)
    console.log(obj.pathname);
    return obj.pathname
}


export default [
    {
        "name": "奇妙糅合物",
        "foodimg": 奇妙糅合物,
        "mat1": null,
        "mat1name": null,
        "mat2": null,
        "mat2name": null,
        "mat3": null,
        "mat3name": null,
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：最大生命值-10%，\n攻击力+10%<br>增强版：攻击力+15%",
        "tag": [
            "其他"
        ]
    },
    {
        "name": "蟹肉碎拌饭",
        "foodimg": 蟹肉碎拌饭,
        "mat1": 蟹钳,
        "mat1name": "蟹钳",
        "mat2": 蟹钳,
        "mat2name": "蟹钳",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：最大生命值+8%，\n防御力+8%<br>增强版：最大生命值+12%，\n防御力+12%",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "调味干粮",
        "foodimg": 调味干粮,
        "mat1": 圆圆肉片,
        "mat1name": "圆圆肉片",
        "mat2": 圆圆肉片,
        "mat2name": "圆圆肉片",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 带腿骨肉,
        "mat4name": "带腿骨肉",
        "mat5": 蟹钳,
        "mat5name": "蟹钳",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：最大生命值+10%<br>增强版：部署费用-1，\n最大生命值+15%",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "松枝熏肉",
        "foodimg": 松枝熏肉,
        "mat1": 蟹钳,
        "mat1name": "蟹钳",
        "mat2": 圆圆肉片,
        "mat2name": "圆圆肉片",
        "mat3": 带腿骨肉,
        "mat3name": "带腿骨肉",
        "mat4": 蟹钳,
        "mat4name": "蟹钳",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 圆圆肉片,
        "mat6name": "圆圆肉片",
        "des": "普通版：部署费用-4<br>增强版：部署费用-5，\n最大生命值+3%",
        "tag": [
            "部署费用"
        ]
    },
    {
        "name": "鲜切蟹生",
        "foodimg": 鲜切蟹生,
        "mat1": 蟹钳,
        "mat1name": "蟹钳",
        "mat2": 蟹钳,
        "mat2name": "蟹钳",
        "mat3": 羽兽翅肉,
        "mat3name": "羽兽翅肉",
        "mat4": 蟹钳,
        "mat4name": "蟹钳",
        "mat5": 蟹钳,
        "mat5name": "蟹钳",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：阻挡数+1<br>增强版：阻挡数+1，\n防御力+8%",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "真空冷制肉脍",
        "foodimg": 真空冷制肉脍,
        "mat1": 蟹钳,
        "mat1name": "蟹钳",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 羽兽翅肉,
        "mat3name": "羽兽翅肉",
        "mat4": 稻谷,
        "mat4name": "稻谷",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 羽兽翅肉,
        "mat6name": "羽兽翅肉",
        "des": "普通版：攻击力+5%，\n攻击速度+5<br>增强版：攻击力+8%，\n攻击速度+8",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "炭烤兽肉卷饼",
        "foodimg": 炭烤兽肉卷饼,
        "mat1": 带腿骨肉,
        "mat1name": "带腿骨肉",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 带腿骨肉,
        "mat4name": "带腿骨肉",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：攻击力+10%<br>增强版：部署费用-1，\n攻击力+15%",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "猎人饭包",
        "foodimg": 猎人饭包,
        "mat1": 羽兽翅肉,
        "mat1name": "羽兽翅肉",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 蟹钳,
        "mat3name": "蟹钳",
        "mat4": 圆圆肉片,
        "mat4name": "圆圆肉片",
        "mat5": 蟹钳,
        "mat5name": "蟹钳",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：部署费用-2，\n防御力+6%<br>增强版：部署费用-3，\n防御力+10%",
        "tag": [
            "生命值/防御力",
            "部署费用"
        ]
    },
    {
        "name": "超级厚馅饼",
        "foodimg": 超级厚馅饼,
        "mat1": 羽兽翅肉,
        "mat1name": "羽兽翅肉",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 羽兽翅肉,
        "mat4name": "羽兽翅肉",
        "mat5": 羽兽翅肉,
        "mat5name": "羽兽翅肉",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：部署费用-2，\n攻击速度+4<br>增强版：部署费用-3，\n攻击速度+7",
        "tag": [
            "攻击力/攻击速度",
            "部署费用"
        ]
    },
    {
        "name": "鲜萃凝方体",
        "foodimg": 鲜萃凝方体,
        "mat1": 带腿骨肉,
        "mat1name": "带腿骨肉",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 圆圆肉片,
        "mat3name": "圆圆肉片",
        "mat4": 带腿骨肉,
        "mat4name": "带腿骨肉",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 圆圆肉片,
        "mat6name": "圆圆肉片",
        "des": "普通版：部署费用-2，\n攻击力+5%<br>增强版：部署费用-3，\n攻击力+8%",
        "tag": [
            "攻击力/攻击速度",
            "部署费用"
        ]
    },
    {
        "name": "香煎杂肉饭",
        "foodimg": 香煎杂肉饭,
        "mat1": 羽兽翅肉,
        "mat1name": "羽兽翅肉",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 圆圆肉片,
        "mat3name": "圆圆肉片",
        "mat4": 羽兽翅肉,
        "mat4name": "羽兽翅肉",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 圆圆肉片,
        "mat6name": "圆圆肉片",
        "des": "普通版：再部署时间-10%<br>增强版：部署费用-1，\n再部署时间-15%",
        "tag": [
            "再部署时间"
        ]
    },
    {
        "name": "脱水增味肉干",
        "foodimg": 脱水增味肉干,
        "mat1": 羽兽翅肉,
        "mat1name": "羽兽翅肉",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 圆圆肉片,
        "mat3name": "圆圆肉片",
        "mat4": 圆圆肉片,
        "mat4name": "圆圆肉片",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 圆圆肉片,
        "mat6name": "圆圆肉片",
        "des": "普通版：部署费用-6<br>增强版：部署费用-7，\n最大生命值+5%",
        "tag": [
            "部署费用"
        ]
    },
    {
        "name": "低温鲜烹炙肉",
        "foodimg": 低温鲜烹炙肉,
        "mat1": 带腿骨肉,
        "mat1name": "带腿骨肉",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 蟹钳,
        "mat3name": "蟹钳",
        "mat4": 带腿骨肉,
        "mat4name": "带腿骨肉",
        "mat5": 蟹钳,
        "mat5name": "蟹钳",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：攻击力+15%，\n防御力+15%<br>增强版：攻击力+20%，\n防御力+20%",
        "tag": [
            "攻击力/攻击速度",
            "生命值/防御力"
        ]
    },
    {
        "name": "蟹壳蒸饭",
        "foodimg": 蟹壳蒸饭,
        "mat1": 圆圆肉片,
        "mat1name": "圆圆肉片",
        "mat2": 蟹钳,
        "mat2name": "蟹钳",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 羽兽翅肉,
        "mat4name": "羽兽翅肉",
        "mat5": 蟹钳,
        "mat5name": "蟹钳",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：阻挡数+1，\n防御力+20%<br>增强版：阻挡数+1，\n防御力+30%",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "提取脂凝晶",
        "foodimg": 提取脂凝晶,
        "mat1": 带腿骨肉,
        "mat1name": "带腿骨肉",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 带腿骨肉,
        "mat3name": "带腿骨肉",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 蟹钳,
        "mat5name": "蟹钳",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：攻击力+25%<br>增强版：部署费用-1，\n攻击力+35%",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "浓缩羹原液",
        "foodimg": 浓缩羹原液,
        "mat1": 羽兽翅肉,
        "mat1name": "羽兽翅肉",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 羽兽翅肉,
        "mat3name": "羽兽翅肉",
        "mat4": 羽兽翅肉,
        "mat4name": "羽兽翅肉",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：攻击速度+15<br>增强版：部署费用-1，\n攻击速度+25",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "高压复焗浓汤",
        "foodimg": 高压复焗浓汤,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 蟹钳,
        "mat2name": "蟹钳",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 晶肝茸髓,
        "mat4name": "晶肝茸髓",
        "mat5": 蟹钳,
        "mat5name": "蟹钳",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：法术抗性+20<br>增强版：法术抗性+25，\n最大生命值+10%",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "生制代餐粗粉",
        "foodimg": 生制代餐粗粉,
        "mat1": 软骨肉块,
        "mat1name": "软骨肉块",
        "mat2": 稻谷,
        "mat2name": "稻谷",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 晶肝茸髓,
        "mat4name": "晶肝茸髓",
        "mat5": 稻谷,
        "mat5name": "稻谷",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：再部署时间-20%<br>增强版：部署费用-1，\n再部署时间-30%",
        "tag": [
            "再部署时间"
        ]
    },
    {
        "name": "脆肉薯条转醇",
        "foodimg": 脆肉薯条转醇,
        "mat1": 羽兽翅肉,
        "mat1name": "羽兽翅肉",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 带腿骨肉,
        "mat3name": "带腿骨肉",
        "mat4": 羽兽翅肉,
        "mat4name": "羽兽翅肉",
        "mat5": 带腿骨肉,
        "mat5name": "带腿骨肉",
        "mat6": 带腿骨肉,
        "mat6name": "带腿骨肉",
        "des": "普通版：攻击力+15%，\n攻击速度+15<br>增强版：攻击力+20%，\n攻击速度+20",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "蟹醇",
        "foodimg": 蟹醇,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 圆圆肉片,
        "mat2name": "圆圆肉片",
        "mat3": 蟹钳,
        "mat3name": "蟹钳",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 蟹钳,
        "mat5name": "蟹钳",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：阻挡数+1，\n防御力+40%<br>增强版：阻挡数+1，\n防御力+60%",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "鲜味汤凝胶",
        "foodimg": 鲜味汤凝胶,
        "mat1": 软骨肉块,
        "mat1name": "软骨肉块",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：攻击力+30%<br>增强版：部署费用-1，\n攻击力+35%",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "转质壳酯块",
        "foodimg": 转质壳酯块,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 圆圆肉片,
        "mat2name": "圆圆肉片",
        "mat3": 圆圆肉片,
        "mat3name": "圆圆肉片",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 圆圆肉片,
        "mat6name": "圆圆肉片",
        "des": "普通版：阻挡数+2，\n最大生命值+60%<br>增强版：阻挡数+2，\n最大生命值+80%",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "复合精制肉酱",
        "foodimg": 复合精制肉酱,
        "mat1": 软骨肉块,
        "mat1name": "软骨肉块",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 羽兽翅肉,
        "mat5name": "羽兽翅肉",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：攻击速度+20<br>增强版：部署费用-1，\n攻击速度+30",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "碳水脂肪聚块",
        "foodimg": 碳水脂肪聚块,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 晶肝茸髓,
        "mat4name": "晶肝茸髓",
        "mat5": 带腿骨肉,
        "mat5name": "带腿骨肉",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：最大生命值+40%，\n再部署时间-30%<br>增强版：最大生命值+60%，\n再部署时间-45%",
        "tag": [
            "生命值/防御力",
            "再部署时间"
        ]
    },
    {
        "name": "味纯聚素粒",
        "foodimg": 味纯聚素粒,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 晶肝茸髓,
        "mat4name": "晶肝茸髓",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：技能技力消耗-25%，\n再部署时间-25%<br>增强版：技能技力消耗-35%，\n再部署时间-35%",
        "tag": [
            "技力消耗",
            "再部署时间"
        ]
    },
    {
        "name": "莱塔尼亚浓汤鲜萃",
        "foodimg": 莱塔尼亚浓汤鲜萃,
        "mat1": 软骨肉块,
        "mat1name": "软骨肉块",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 蟹钳,
        "mat3name": "蟹钳",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 圆圆肉片,
        "mat5name": "圆圆肉片",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：阻挡数+1，\n攻击力+20%<br>增强版：阻挡数+1，\n攻击力+35%",
        "tag": [
            "攻击力/攻击速度",
            "生命值/防御力"
        ]
    },
    {
        "name": "鲜能剂",
        "foodimg": 鲜能剂,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 圆圆肉片,
        "mat3name": "圆圆肉片",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 羽兽翅肉,
        "mat5name": "羽兽翅肉",
        "mat6": 圆圆肉片,
        "mat6name": "圆圆肉片",
        "des": "普通版：攻击力+20%，\n攻击速度+15<br>增强版：攻击力+30%，\n攻击速度+25",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "极温速烹兽肉",
        "foodimg": 极温速烹兽肉,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 圆圆肉片,
        "mat3name": "圆圆肉片",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 带腿骨肉,
        "mat5name": "带腿骨肉",
        "mat6": 圆圆肉片,
        "mat6name": "圆圆肉片",
        "des": "普通版：部署费用-5，\n攻击力+20%<br>增强版：部署费用-6，\n攻击力+30%",
        "tag": [
            "攻击力/攻击速度",
            "部署费用"
        ]
    },
    {
        "name": "东国纳米割烹",
        "foodimg": 东国纳米割烹,
        "mat1": 软骨肉块,
        "mat1name": "软骨肉块",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 带腿骨肉,
        "mat3name": "带腿骨肉",
        "mat4": 晶肝茸髓,
        "mat4name": "晶肝茸髓",
        "mat5": 羽兽翅肉,
        "mat5name": "羽兽翅肉",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：获得抵抗，最大生命值+50%，\n防御力+50%<br>增强版：获得抵抗，最大生命值+75%，\n防御力+75%",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "维多利亚皇家凝方",
        "foodimg": 维多利亚皇家凝方,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 带腿骨肉,
        "mat3name": "带腿骨肉",
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：部署费用-15<br>增强版：部署费用-18",
        "tag": [
            "部署费用"
        ]
    },
    {
        "name": "炎国山水原液",
        "foodimg": 炎国山水原液,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 带腿骨肉,
        "mat2name": "带腿骨肉",
        "mat3": 带腿骨肉,
        "mat3name": "带腿骨肉",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 带腿骨肉,
        "mat5name": "带腿骨肉",
        "mat6": 带腿骨肉,
        "mat6name": "带腿骨肉",
        "des": "普通版：攻击力+40%<br>增强版：部署费用-1，攻击力+55%",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "卡西米尔骑士补充剂",
        "foodimg": 卡西米尔骑士补充剂,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 晶肝茸髓,
        "mat2name": "晶肝茸髓",
        "mat3": 蟹钳,
        "mat3name": "蟹钳",
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：技力消耗-40%<br>增强版：部署费用-1，\n技力消耗-55%",
        "tag": [
            "技力消耗"
        ]
    },
    {
        "name": "哥伦比亚分子胶囊",
        "foodimg": 哥伦比亚分子胶囊,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 羽兽翅肉,
        "mat2name": "羽兽翅肉",
        "mat3": 羽兽翅肉,
        "mat3name": "羽兽翅肉",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 羽兽翅肉,
        "mat5name": "羽兽翅肉",
        "mat6": 羽兽翅肉,
        "mat6name": "羽兽翅肉",
        "des": "普通版：攻击速度+35<br>增强版：部署费用-2，\n攻击速度+45",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "拉特兰圣音汤醇",
        "foodimg": 拉特兰圣音汤醇,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 软骨肉块,
        "mat2name": "软骨肉块",
        "mat3": 稻谷,
        "mat3name": "稻谷",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 软骨肉块,
        "mat5name": "软骨肉块",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：再部署时间-50%<br>增强版：部署费用-2，\n再部署时间-55%",
        "tag": [
            "再部署时间"
        ]
    },
    {
        "name": "低压干制精肉",
        "foodimg": 低压干制精肉,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 软骨肉块,
        "mat2name": "软骨肉块",
        "mat3": 蟹钳,
        "mat3name": "蟹钳",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 软骨肉块,
        "mat5name": "软骨肉块",
        "mat6": 蟹钳,
        "mat6name": "蟹钳",
        "des": "普通版：阻挡数+1，\n防御力+50%，\n法术抗性+25<br>增强版：阻挡数+1，\n防御力+75%，\n法术抗性+35",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "米诺斯诗歌凝胶",
        "foodimg": 米诺斯诗歌凝胶,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 晶肝茸髓,
        "mat2name": "晶肝茸髓",
        "mat3": 圆圆肉片,
        "mat3name": "圆圆肉片",
        "mat4": 晶肝茸髓,
        "mat4name": "晶肝茸髓",
        "mat5": 软骨肉块,
        "mat5name": "软骨肉块",
        "mat6": 圆圆肉片,
        "mat6name": "圆圆肉片",
        "des": "普通版：释放技能时，其他食用此食品\n的干员恢复2点技力<br>增强版：释放技能时，其他食用此食品\n的干员恢复3点技力",
        "tag": [
            "技力消耗"
        ]
    },
    {
        "name": "固态源溏心蛋补剂",
        "foodimg": 固态源溏心蛋补剂,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 软骨肉块,
        "mat2name": "软骨肉块",
        "mat3": 带腿骨肉,
        "mat3name": "带腿骨肉",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 软骨肉块,
        "mat5name": "软骨肉块",
        "mat6": 带腿骨肉,
        "mat6name": "带腿骨肉",
        "des": "普通版：攻击力+20%，\n攻击无视敌人15%的防御力<br>增强版：攻击力+30%，\n攻击无视敌人20%的防御力",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "河鳞水果凝胶",
        "foodimg": 河鳞水果凝胶,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 晶肝茸髓,
        "mat2name": "晶肝茸髓",
        "mat3": 带腿骨肉,
        "mat3name": "带腿骨肉",
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：攻击速度+20，\n攻击无视敌人8点法术抗性<br>增强版：攻击速度+30，\n攻击无视敌人12点法术抗性",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "炎国荒地菜肉酮",
        "foodimg": 炎国荒地菜肉酮,
        "mat1": 软骨肉块,
        "mat1name": "软骨肉块",
        "mat2": 软骨肉块,
        "mat2name": "软骨肉块",
        "mat3": 圆圆肉片,
        "mat3name": "圆圆肉片",
        "mat4": 晶肝茸髓,
        "mat4name": "晶肝茸髓",
        "mat5": 晶肝茸髓,
        "mat5name": "晶肝茸髓",
        "mat6": 稻谷,
        "mat6name": "稻谷",
        "des": "普通版：阻挡数+2，获得最高+100%防御力\n的坚忍（损失50%生命值时\n达到最大加成）<br>增强版：阻挡数+2，获得最高+150%防御力\n的坚忍（损失50%生命值时\n达到最大加成）",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "音乐速烤萃取酯",
        "foodimg": 音乐速烤萃取酯,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 软骨肉块,
        "mat2name": "软骨肉块",
        "mat3": 羽兽翅肉,
        "mat3name": "羽兽翅肉",
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：自身更容易成为攻击目标，\n防御力+50%，\n获得20%的物理与法术闪避<br>增强版：自身更容易成为攻击目标，\n防御力+75%，\n获得40%的物理与法术闪避",
        "tag": [
            "生命值/防御力"
        ]
    },
    {
        "name": "哥伦比亚炮灰羽",
        "foodimg": 哥伦比亚炮灰羽,
        "mat1": 软骨肉块,
        "mat1name": "软骨肉块",
        "mat2": 软骨肉块,
        "mat2name": "软骨肉块",
        "mat3": 软骨肉块,
        "mat3name": "软骨肉块",
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：生命值高于80%获得\n+50%攻击力的精力充沛<br>增强版：生命值高于50%获得\n+70%攻击力的精力充沛",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "香肠豆泥聚块",
        "foodimg": 香肠豆泥聚块,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 晶肝茸髓,
        "mat2name": "晶肝茸髓",
        "mat3": 羽兽翅肉,
        "mat3name": "羽兽翅肉",
        "mat4": 软骨肉块,
        "mat4name": "软骨肉块",
        "mat5": 软骨肉块,
        "mat5name": "软骨肉块",
        "mat6": 羽兽翅肉,
        "mat6name": "羽兽翅肉",
        "des": "普通版：每击杀一个敌人，攻击速度+5，\n最多可叠加10次（撤退后清空）<br>增强版：每击杀一个敌人，攻击速度+7，\n最多可叠加10次（撤退后清空）",
        "tag": [
            "攻击力/攻击速度"
        ]
    },
    {
        "name": "部族狂欢晚宴",
        "foodimg": 部族狂欢晚宴,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 晶肝茸髓,
        "mat2name": "晶肝茸髓",
        "mat3": 软骨肉块,
        "mat3name": "软骨肉块",
        "mat4": 晶肝茸髓,
        "mat4name": "晶肝茸髓",
        "mat5": 软骨肉块,
        "mat5name": "软骨肉块",
        "mat6": 软骨肉块,
        "mat6name": "软骨肉块",
        "des": "普通版：获得迷彩，攻击力+30%<br>增强版：获得迷彩，攻击力+50%",
        "tag": [
            "攻击力/攻击速度",
            "生命值/防御力"
        ]
    },
    {
        "name": "中央谷地混合烤肉",
        "foodimg": 中央谷地混合烤肉,
        "mat1": 晶肝茸髓,
        "mat1name": "晶肝茸髓",
        "mat2": 晶肝茸髓,
        "mat2name": "晶肝茸髓",
        "mat3": 晶肝茸髓,
        "mat3name": "晶肝茸髓",
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：范围内的友方单位技力\n自然回复速度+0.4秒（不叠加）\n且受到的治疗效果提升15%<br>增强版：范围内的友方单位技力\n自然回复速度+0.5秒（不叠加）\n且受到的治疗效果提升30%",
        "tag": [
            "技力消耗"
        ]
    },
    {
        "name": "雨林奇妙怪味糖",
        "foodimg": 雨林奇妙怪味糖,
        "mat1": null,
        "mat1name": null,
        "mat2": null,
        "mat2name": null,
        "mat3": null,
        "mat3name": null,
        "mat4": null,
        "mat4name": null,
        "mat5": null,
        "mat5name": null,
        "mat6": null,
        "mat6name": null,
        "des": "普通版：每6秒获得1点技力，\n但技能变为自动释放<br>增强版：",
        "tag": [
            "技力消耗",
            "其他"
        ]
    }
]
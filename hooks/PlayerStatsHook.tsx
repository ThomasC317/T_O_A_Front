import { useEffect } from "react";

import {
  setItemValue,
  SetSkillDisplayedReloadTime,
  setCriticalChance,
  setFarmerRenderBonus,
  setXpRenderBonus,
  setOnclickResource,
  SetPassiveResource,
  usePlayer,
  setPlayerStats,
} from "../context/PlayerContext"; // Replace with the actual path to your action creators

function usePlayerStatsEffects() {
  const { state, dispatch } = usePlayer();

//   useEffect(() => {
//     state.gameItem.items.forEach((item) => {
//       const newValue =
//         item.value - (state.playerStats.stats.charisma * item.value) / 100;
//       console.log("new value:", newValue)
//       dispatch(setItemValue(item.id, newValue));
//     });
//   }, [state.playerStats.stats.charisma]);

//   useEffect(() => {
//     state.playerStats.skills.forEach((skill) => {
//       const newReloadTime =
//         skill.baseReloadTime -
//         (state.playerStats.stats.agility * skill.baseReloadTime) / 100;
//       dispatch(SetSkillDisplayedReloadTime(skill.id, newReloadTime));
//       console.log("new reload Time:", newReloadTime)
//     });
//   }, [state.playerStats.stats.agility]);

//   useEffect(() => {
//     state.playerStats.skills.forEach((skill) => {
//       const newDurationTime =
//         skill.durationTime -
//         (state.playerStats.stats.stamina * skill.durationTime) / 100;
//       dispatch(SetSkillDisplayedReloadTime(skill.id, newDurationTime));
//       console.log("new duration Time:", newDurationTime)
//     });
//   }, [state.playerStats.stats.stamina]);

  useEffect(() => {
    const chance = Math.floor(state.playerStats.stats.criticalChances / 100); // 1% chance per 100 criticalChance
    dispatch(setCriticalChance(chance));
    console.log("new critical chance Time:", chance)
  }, [state.playerStats.stats.criticalChances]);

  useEffect(() => {
    const bonusFarmerRender = Math.floor(
      state.playerStats.stats.motivation / 100
    ); // 1% shop reduction per 100 charisma
    dispatch(
      setFarmerRenderBonus(bonusFarmerRender)
    );
    console.log("new farmer render bonus:", bonusFarmerRender)
  }, [state.playerStats.stats.motivation]);

  useEffect(() => {
    const bonusXp = Math.floor(state.playerStats.stats.concentration / 100); // 1% chance per 100 criticalChance
    dispatch(setXpRenderBonus(bonusXp));
    console.log("new xp bonus:", bonusXp)
  }, [state.playerStats.stats.concentration]);

  useEffect(() => {
    dispatch(setOnclickResource(state.playerStats.stats.strength))
    console.log("new onclick resource:", state.playerStats.stats.strength)
  }, [state.playerStats.stats.strength]);

  useEffect(() => {
    dispatch(SetPassiveResource(state.playerStats.stats.intelligence))
    console.log("new passive resource:", state.playerStats.stats.intelligence)
  }, [state.playerStats.stats.intelligence]);

  // useEffect(()=> {
  //   dispatch(setPlayerStats(state.talentState.stats, "add"));
  // }, [state.talentState.stats])
}

export default usePlayerStatsEffects;

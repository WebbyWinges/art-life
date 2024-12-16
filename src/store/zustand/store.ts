import { create } from "zustand";
import _ from "lodash";

export const useStore = create(set => ({
  tabs: [
    {
      id: 0,
      name: "Основная страница",
      showTitle: false,
      showInMenu: false,
      blocks: [
        { id: 0, selectedValue: "Текст", fields: [] }, // Убедитесь, что fields всегда массив
      ],
    },
  ],
  setTabs: newTabs => set({ tabs: _.cloneDeep(newTabs) }),
  updateBlockFields: (tabId, blockId, newFields) =>
    set(state => {
      const updatedTabs = state.tabs.map(tab =>
        tab.id === tabId
          ? {
              ...tab,
              blocks: tab.blocks.map(block =>
                block.id === blockId
                  ? { ...block, fields: _.cloneDeep(newFields) }
                  : block,
              ),
            }
          : tab,
      );
      return { tabs: updatedTabs };
    }),
  addBlock: tabId =>
    set(state => {
      const updatedTabs = state.tabs.map(tab =>
        tab.id === tabId
          ? {
              ...tab,
              blocks: [
                ...tab.blocks,
                {
                  id: tab.blocks.length,
                  selectedValue: "Текст",
                  fields: [],
                },
              ],
            }
          : tab,
      );
      return { tabs: updatedTabs };
    }),
  // Дополнительные методы
}));

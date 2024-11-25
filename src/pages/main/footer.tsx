import React, { useState } from "react";
import BottomPanelSettingsForm from "@/components/main/bottom.panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

type ButtonField = {
  id: number;
  type: string;
  value: string;
  icon?: File | null;
};

const FooterSettings: React.FC = () => {
  const [removeBottomPanel, setRemoveBottomPanel] = useState(false);
  const [panelColor, setPanelColor] = useState<string>("");
  const [iconTextColor, setIconTextColor] = useState<string>("");

  const handleFormSubmit = (formData: { buttons: ButtonField[] }) => {
    const fullFormData = {
      removeBottomPanel,
      panelColor,
      iconTextColor,
      buttons: formData.buttons,
    };
    console.log("Received form data:", fullFormData);
  };

  return (
    <div className="flex flex-col gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Настройки нижней панели
      </span>

      <div className="flex gap-3 items-center">
        <Input
          type="checkbox"
          style={{
            width: 19,
            height: 19,
          }}
          checked={removeBottomPanel}
          onChange={(e) => setRemoveBottomPanel(e.target.checked)}
        />
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Убрать нижнюю панель
        </span>
      </div>

      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет панели
      </span>
      <Input
        type="text"
        value={panelColor}
        onChange={(e) => setPanelColor(e.target.value)}
      />

      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет иконок и текста
      </span>
      <Input
        type="text"
        value={iconTextColor}
        onChange={(e) => setIconTextColor(e.target.value)}
      />

      <span
        style={{
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Кнопки
      </span>

      <BottomPanelSettingsForm onFormSubmit={handleFormSubmit} />

      <Button className="bg-[#10C3EB] w-32 mb-3">
        <Link to={"/main/6"}>
          <span
            style={{
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            Далее
          </span>
        </Link>
      </Button>
    </div>
  );
};

export default FooterSettings;

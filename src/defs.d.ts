
declare interface PlotlyJSON {
  data: PlotlyData;
  layout: PlotlyLayout;
}

declare type PlotlyData = Array<FigureData>;

declare interface FigureData {
  hovertemplate: string;
  legendgroup: string;
  marker: {
    color: string;
    symbol: string;
  };
  mode: string;
  name: string;
  x: number[];
  y: number[];
}

declare interface PlotlyLayout {
  template: {
    data: object[];
    layout: {
      annotationdefaults: object;
      autotypenumbers: string;
      coloraxis: object;
    }
  }
}

export class Component {
  public name: string;
  public tag: string[];
  public category: string[];

  public scheme: string | undefined = undefined;
  public canEditScheme: boolean = false;

  public component: {
    data(): {
      name: string;
      tag: string[];
      category: string[];
      forceScheme: string | undefined;
      canEditScheme: boolean;
    };
  };

  constructor(component: {
    data(): {
      name: string;
      tag: string[];
      category: string[];
      forceScheme: string | undefined;
      canEditScheme: boolean;
    };
  }) {
    this.name = component.data().name;
    this.tag = component.data().tag;
    this.category = component.data().category;
    this.component = component;

    this.scheme = component.data().forceScheme;
    if (this.scheme !== undefined) {
      this.tag.push(this.scheme.charAt(0).toUpperCase() + this.scheme.slice(1));
    }

    this.canEditScheme = component.data().canEditScheme;
  }
}

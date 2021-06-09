import React from "react";
const major = {};
const relativeMinor = {};
const harmonicMinor = {};
interface IChordObject {
  major: string[];
  relativeMinor: string;
}

export default class Chords {
  private c: IChordObject = {
    major: ["C", "D", "E", "F", "G", "A", "B"],
    relativeMinor: "A"
  };
  private d: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private e: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private f: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private g: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private a: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private b: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private bFlat: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private eFlat: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private aFlat: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private dFlat: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private gFlat: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private cFlat: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private fFlat: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private fSharp: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private cSharp: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private gSharp: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private dSharp: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private aSharp: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  private eSharp: IChordObject = {
    major: [],
    relativeMinor: ""
  };
  public get CMajor(): string[] {
    return this.c.major;
  }
  public get DMajor(): string[] {
    return this.d.major;
  }
  public get EMajor(): string[] {
    return this.e.major;
  }
  public get FMajor(): string[] {
    return this.f.major;
  }
  public get GMajor(): string[] {
    return this.g.major;
  }
  public get AMajor(): string[] {
    return this.a.major;
  }
  public get BMajor(): string[] {
    return this.b.major;
  }
}

import "./styles.css";
import Chords from "./data/chords";
// temporarily add table as a "cheatsheet"
const Table = () => (
  <table className="wikitable">
    <tbody>
      <tr>
        <th rowSpan={2}>No.</th>
        <th colSpan={2}>
          <a
            href="https://en.wikipedia.org/wiki/Flat_(music)"
            title="Flat (music)"
          >
            Flats
          </a>
        </th>
        <th colSpan={2}>
          <a
            href="https://en.wikipedia.org/wiki/Sharp_(music)"
            title="Sharp (music)"
          >
            Sharps
          </a>
        </th>
      </tr>
      <tr>
        <th>Major</th>
        <th>
          <a
            href="https://en.wikipedia.org/wiki/Minor_scale"
            title="Minor scale"
          >
            minor
          </a>
        </th>
        <th>Major</th>
        <th>minor</th>
      </tr>
      <tr>
        <td>0</td>
        <td>
          <a href="https://en.wikipedia.org/wiki/C_major" title="C major">
            <b>C</b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/A_minor" title="A minor">
            <b>a</b>
          </a>
        </td>
        <td>
          <b>C</b>
        </td>
        <td>
          <b>a</b>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>
          <a href="https://en.wikipedia.org/wiki/F_major" title="">
            <b>F</b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/D_minor" title="D minor">
            <b>d</b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/G_major" title="G major">
            <b>G</b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/E_minor" title="E minor">
            <b>e</b>
          </a>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          <a href="https://en.wikipedia.org/wiki/B-flat_major" title="">
            <b>
              B
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/G_minor" title="G minor">
            <b>g</b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/D_major" title="D major">
            <b>D</b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/B_minor" title="">
            <b>b</b>
          </a>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          <a href="https://en.wikipedia.org/wiki/E-flat_major" title="B minor">
            <b>
              E
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/C_minor" title="C minor">
            <b>c</b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/A_major" title="A major">
            <b>A</b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/F-sharp_minor"
            title="F-sharp minor"
          >
            <b>
              f
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/A-flat_major"
            title="A-flat major"
          >
            <b>
              A
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/F_minor" title="F minor">
            <b>f</b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/E_major" title="E major">
            <b>E</b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/C-sharp_minor"
            title="C-sharp minor"
          >
            <b>
              c
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/D-flat_major"
            title="D-flat major"
          >
            <b>
              D
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/B-flat_minor"
            title="B-flat minor"
          >
            <b>
              b
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/B_major" title="B major">
            <b>B</b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/G-sharp_minor"
            title="G-sharp minor"
          >
            <b>
              g
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/G-flat_major"
            title="G-flat major"
          >
            <b>
              G
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/E-flat_minor"
            title="E-flat minor"
          >
            <b>
              e
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/F-sharp_major"
            title="F-sharp major"
          >
            <b>
              F
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/D-sharp_minor"
            title="D-sharp minor"
          >
            <b>
              d
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
      </tr>
      <tr>
        <td>7</td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/C-flat_major"
            title="C-flat major"
          >
            <b>
              C
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/A-flat_minor"
            title="A-flat minor"
          >
            <b>
              a
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/C-sharp_major"
            title="C-sharp major"
          >
            <b>
              C
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/A-sharp_minor"
            title="F-flat major"
          >
            <b>
              a
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="https://en.wikipedia.org/wiki/Theoretical_key" title="">
            8
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/F-flat_major" title="">
            <b>
              F
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a href="https://en.wikipedia.org/wiki/D-flat_minor" title="F major">
            <b>
              d
              <span className="music-symbol">
                <span className="music-flat">♭</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/G-sharp_major"
            title="G-sharp major"
          >
            <b>
              G
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
        <td>
          <a
            href="https://en.wikipedia.org/wiki/F_minor#E-sharp_minor"
            title="F minor"
          >
            <b>
              e
              <span className="music-symbol">
                <span className="music-sharp">♯</span>
              </span>
            </b>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

export default function App() {
  const chords = new Chords();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {JSON.stringify(chords.CMajor)}
      <Table />
    </div>
  );
}

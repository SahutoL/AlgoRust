import { Article, ContentBlockType } from '../types';

export const articles: Article[] = [
  // ========== 基礎理論 ==========
  {
    id: 3,
    slug: 'what-is-an-algorithm',
    title: 'アルゴリズムとは何か？',
    summary: 'すべてのプログラミングの根底にある「アルゴリズム」という概念を解説します。問題解決のための設計図であり、効率的なソフトウェア開発に不可欠な理由を学びます。',
    author: 'C. Babbage',
    date: '2023-11-01',
    tags: ['基礎', '計算機科学', 'アルゴリズム'],
    content: [
      { type: ContentBlockType.HEADING, content: 'アルゴリズムの定義' },
      { type: ContentBlockType.PARAGRAPH, content: 'アルゴリズムとは、特定の問題を解決するための手順や計算方法を、明確かつ有限のステップで記述したものです。料理のレシピに例えられることがよくあります。レシピには材料（入力）があり、調理手順（処理）に従うことで、料理（出力）が完成します。同様に、アルゴリズムはコンピュータがタスクを完了するための明確な指示書です。' },
      { type: ContentBlockType.SUBHEADING, content: '良いアルゴリズムの特性' },
      { 
        type: ContentBlockType.LIST, 
        content: [
          '正当性 (Correctness): どんな有効な入力に対しても、必ず正しい結果を生成する。',
          '有限性 (Finiteness): 必ず有限の時間で処理が終了する。無限ループに陥らない。',
          '明確性 (Definiteness): 各ステップの処理が曖昧でなく、誰が実行しても同じ結果になる。',
          '効率性 (Efficiency): 使用する時間（時間計算量）とメモリ（空間計算量）が少ないほど良い。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'なぜアルゴリズムを学ぶのか？' },
      { type: ContentBlockType.PARAGRAPH, content: '同じ問題でも、複数の解決策（アルゴリズム）が存在することがあります。そして、どのアルゴリズムを選択するかによって、プログラムのパフォーマンスは劇的に変わります。例えば、100万件のデータから何かを探すとき、あるアルゴリズムでは1秒もかからないのに、別のものでは数分以上かかるかもしれません。アルゴリズムを学ぶことは、単に問題を解決するだけでなく、「より良く」解決するための思考法を身につけることに繋がります。これにより、スケーラブルで保守性の高いソフトウェアを開発する能力が養われます。' },
      { type: ContentBlockType.HEADING, content: 'アルゴリズムの設計技法' },
      { type: ContentBlockType.PARAGRAPH, content: 'アルゴリズムを設計するには、いくつかの確立されたパターンや技法があります。これらを学ぶことで、未知の問題にも対応しやすくなります。' },
      {
        type: ContentBlockType.LIST,
        content: [
          '分割統治法: 大きな問題を小さな部分問題に分割し、それぞれを解決してから結果を統合する手法。マージソートやクイックソートで使われます。',
          '動的計画法 (DP): 部分問題の解を記録（メモ化）し、再利用することで計算の重複を避ける手法。フィボナッチ数列の計算や最短経路問題で強力です。',
          '貪欲法 (Greedy Algorithm): その場その場で最適と思われる選択を繰り返すことで、全体として最適な解を得ようとする手法。硬貨の問題などが有名です。',
          'バックトラッキング: 解を探索する過程で、有望でないと判断した時点で前のステップに戻り、別の選択肢を試す手法。迷路探索や数独の解決に使われます。'
        ]
      }
    ],
  },
  {
    id: 4,
    slug: 'computational-complexity',
    title: '計算量とO記法入門',
    summary: 'アルゴリズムの性能を客観的に評価するための指標「計算量」と、それを表現する「O記法」について解説します。なぜこれが効率的なコードを書く上で重要なのかを理解します。',
    author: 'A. Lovelace',
    date: '2023-11-05',
    tags: ['計算量', 'O記法', 'パフォーマンス', 'アルゴリズム分析', '基礎'],
    content: [
      { type: ContentBlockType.HEADING, content: '計算量とは？' },
      { type: ContentBlockType.PARAGRAPH, content: '計算量とは、アルゴリズムの効率性を評価するための指標です。主に入力データサイズ（n）が増加したときに、実行時間やメモリ使用量がどれくらいの割合で増加するかを示します。計算量には「時間計算量」と「空間計算量」の2つがあります。' },
      { type: ContentBlockType.SUBHEADING, content: '時間計算量 vs 空間計算量' },
      {
        type: ContentBlockType.LIST,
        content: [
            '時間計算量 (Time Complexity): アルゴリズムの実行にかかる時間。CPUの処理ステップ数で評価されることが多いです。',
            '空間計算量 (Space Complexity): アルゴリズムが実行中に使用するメモリの量。変数やデータ構造の格納に必要な領域で評価されます。'
        ]
      },
      { type: ContentBlockType.SUBHEADING, content: 'O記法（オーダー記法）' },
      { type: ContentBlockType.PARAGRAPH, content: 'O記法（ビッグオーきほう）は、計算量を表現するための最も一般的な方法です。これは、入力サイズnが非常に大きくなったときの、アルゴリズムの性能の「上限」や「最悪のケース」を示します。定数倍や低次の項は無視し、最も影響の大きい項だけを残して表記します。例えば、`3n² + 2n + 5`という計算ステップがあった場合、O記法では `O(n²)` となります。' },
      { type: ContentBlockType.HEADING, content: '代表的な計算量の種類と成長率' },
      { type: ContentBlockType.PARAGRAPH, content: '以下に、代表的な計算量を効率の良い順に示します。nが大きくなるにつれて、実行時間の差は天文学的なものになります。' },
      {
        type: ContentBlockType.CODE,
        language: 'text',
        content: `
| O記法         | 名称           | n=10          | n=100         | n=1000        |
|---------------|----------------|---------------|---------------|---------------|
| O(1)          | 定数時間       | 1             | 1             | 1             |
| O(log n)      | 対数時間       | ~3            | ~7            | ~10           |
| O(n)          | 線形時間       | 10            | 100           | 1000          |
| O(n log n)    | 線形対数時間   | ~30           | ~700          | ~10000        |
| O(n²)         | 二乗時間       | 100           | 10,000        | 1,000,000     |
| O(2ⁿ)         | 指数時間       | 1024          | 1.26e+30      | 途方もない数  |
| O(n!)         | 階乗時間       | 3,628,800     | 途方もない数  | 途方もない数  |
`
      },
      { type: ContentBlockType.PARAGRAPH, content: 'この表からわかるように、O(n²)以上の計算量を持つアルゴリズムは、入力サイズが少し増えるだけで現実的な時間内に処理を終えることが難しくなります。そのため、可能な限り O(n log n) 以下の効率的なアルゴリズムを選択することが重要です。' },
    ],
  },
  // ========== データ構造 ==========
  {
    id: 11,
    slug: 'what-are-data-structures',
    title: 'データ構造とは何か？',
    summary: 'データを効率的に整理・保存するための「型」であるデータ構造の基本を解説。アルゴリズムの性能を最大限に引き出すための重要な概念です。',
    author: 'G. M. Hopper',
    date: '2023-11-28',
    tags: ['基礎', 'データ構造', '計算機科学'],
    content: [
      { type: ContentBlockType.HEADING, content: 'データ構造の役割' },
      { type: ContentBlockType.PARAGRAPH, content: 'データ構造とは、コンピュータのメモリ上でデータを効率的に格納し、操作するための体系的な方法です。アルゴリズムが「問題を解く手順」であるならば、データ構造は「その手順で使う道具や材料の整理棚」に例えられます。適切なデータ構造を選ぶことで、アルゴリズムのパフォーマンスは劇的に向上します。' },
      { type: ContentBlockType.SUBHEADING, content: 'なぜデータ構造が重要か？' },
      {
        type: ContentBlockType.LIST,
        content: [
          '効率性: データへのアクセス、追加、削除などの操作を高速に行うことができます。',
          '抽象化: 複雑なデータの関係性を、プログラム上で扱いやすいシンプルなモデルとして表現できます。',
          '再利用性: 一度定義したデータ構造は、様々なアルゴリズムやプログラムで再利用できます。',
        ]
      },
      { type: ContentBlockType.HEADING, content: '基本的なデータ構造の種類' },
      { type: ContentBlockType.PARAGRAPH, content: '世の中には多くのデータ構造が存在しますが、基本となるものをいくつか紹介します。' },
      {
        type: ContentBlockType.LIST,
        content: [
          '配列: 同じ型の要素がメモリ上で連続して並んだもの。インデックスで高速にアクセスできます。',
          '連結リスト: 各要素が次の要素へのポインタを持つ構造。要素の挿入・削除が容易です。',
          'スタック: 後入れ先出し（LIFO）の構造。最後に追加したデータが最初に取り出されます。',
          'キュー: 先入れ先出し（FIFO）の構造。最初に追加したデータが最初に取り出されます。',
          'ハッシュテーブル: キーと値のペアを格納し、キーを使って高速に値を検索できます。',
          'ツリー: 階層的な関係を持つデータを表現するのに適した構造。ファイルシステムなどが例です。',
          'グラフ: ノード（頂点）とそれらを繋ぐエッジ（辺）で構成され、複雑な関係性を表現します。SNSの友人関係など。',
        ]
      },
       { type: ContentBlockType.PARAGRAPH, content: 'どのデータ構造を選択するかは、解決したい問題の性質（データの量、行う操作の種類や頻度など）によって決まります。例えば、検索が多いならハッシュテーブル、頻繁な挿入・削除があるなら連結リスト、といった具合です。' },
    ]
  },
  {
    id: 12,
    slug: 'stack-data-structure',
    title: 'スタック：LIFOの基本データ構造',
    summary: '後入れ先出し（LIFO）の原則で動作するデータ構造「スタック」を詳解。その仕組みと、関数呼び出しや深さ優先探索（DFS）での応用例を学びます。',
    author: 'F. L. Bauer',
    date: '2023-12-02',
    tags: ['データ構造', 'スタック', 'LIFO', 'Rust'],
    content: [
      { type: ContentBlockType.HEADING, content: 'スタックとは？' },
      { type: ContentBlockType.PARAGRAPH, content: 'スタックは、「後入れ先出し」（Last-In, First-Out: LIFO）の原則に従うデータ構造です。積み重ねた皿の山のように、最後に追加した要素が一番上に来て、次に取り出されるのもその一番上の要素です。' },
      { type: ContentBlockType.SUBHEADING, content: '主な操作' },
      {
        type: ContentBlockType.LIST,
        content: [
          'Push: スタックの一番上に新しい要素を追加する。',
          'Pop: スタックの一番上の要素を取り出し、スタックから削除する。',
          'Peek (or Top): スタックの一番上の要素を、削除せずに参照する。',
          'IsEmpty: スタックが空かどうかを確認する。',
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装' },
      { type: ContentBlockType.PARAGRAPH, content: 'Rustでは、`Vec`型を使うことで簡単にスタックを実装できます。`push`メソッドと`pop`メソッドがネイティブに提供されています。' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
struct Stack<T> {
    elements: Vec<T>,
}

impl<T> Stack<T> {
    fn new() -> Self {
        Stack { elements: Vec::new() }
    }

    fn push(&mut self, item: T) {
        self.elements.push(item);
    }

    fn pop(&mut self) -> Option<T> {
        self.elements.pop()
    }

    fn peek(&self) -> Option<&T> {
        self.elements.last()
    }

    fn is_empty(&self) -> bool {
        self.elements.is_empty()
    }

    fn size(&self) -> usize {
        self.elements.len()
    }
}

fn main() {
    let mut stack = Stack::new();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    println!("Top element is: {:?}", stack.peek()); // Some(3)
    println!("Stack size: {}", stack.size()); // 3
    println!("Popped: {:?}", stack.pop()); // Some(3)
    println!("Is empty: {}", stack.is_empty()); // false
}
`
      },
      { type: ContentBlockType.HEADING, content: '応用例' },
      { 
        type: ContentBlockType.LIST,
        content: [
          '関数呼び出し（コールスタック）: プログラムが関数を呼び出すたびに、その情報をスタックに積み、関数から戻るときにスタックから取り出します。',
          '式の評価: `(5 + 3) * 2` のような数式をコンピュータが評価する際に、演算子やオペランドをスタックで管理します（逆ポーランド記法など）。',
          'エディタの「元に戻す（Undo）」機能: 操作の履歴をスタックに保存し、「元に戻す」が押されるたびに最後の操作を取り出してキャンセルします。',
          '深さ優先探索（DFS）: グラフやツリーの探索で、次に行くべきノードをスタックで管理します。',
          'カッコの整合性チェック: `{[()()]}` のような文字列で、カッコが正しく閉じられているかを確認する問題で利用されます。'
        ]
      },
    ]
  },
  {
    id: 13,
    slug: 'queue-data-structure',
    title: 'キュー：FIFOの基本データ構造',
    summary: '先入れ先出し（FIFO）の原則で動作するデータ構造「キュー」を解説。その仕組みと、幅優先探索（BFS）やタスク管理での役割を学びます。',
    author: 'A. K. Erlang',
    date: '2023-12-05',
    tags: ['データ構造', 'キュー', 'FIFO', 'Rust'],
    content: [
      { type: ContentBlockType.HEADING, content: 'キューとは？' },
      { type: ContentBlockType.PARAGRAPH, content: 'キューは、「先入れ先出し」（First-In, First-Out: FIFO）の原則に従うデータ構造です。スーパーのレジ待ちの列のように、最初に列に並んだ人が最初にサービスを受けます。データは一方の端（後端）から追加され、もう一方の端（先端）から取り出されます。' },
      { type: ContentBlockType.SUBHEADING, content: '主な操作' },
      {
        type: ContentBlockType.LIST,
        content: [
          'Enqueue: キューの後端に新しい要素を追加する。',
          'Dequeue: キューの先端から要素を取り出し、キューから削除する。',
          'Peek (or Front): キューの先端の要素を、削除せずに参照する。',
          'IsEmpty: キューが空かどうかを確認する。',
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装' },
      { type: ContentBlockType.PARAGRAPH, content: 'Rustの標準ライブラリには、両端キュー（Double-ended queue）である `VecDeque` があり、これをキューとして利用するのが効率的です。先端からの削除(`pop_front`)が O(1) で行えるため、`Vec` を使う（O(n)になる）よりも遥かにパフォーマンスが良いです。' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
use std::collections::VecDeque;

struct Queue<T> {
    elements: VecDeque<T>,
}

impl<T> Queue<T> {
    fn new() -> Self {
        Queue { elements: VecDeque::new() }
    }

    fn enqueue(&mut self, item: T) {
        self.elements.push_back(item);
    }

    fn dequeue(&mut self) -> Option<T> {
        self.elements.pop_front()
    }

    fn peek(&self) -> Option<&T> {
        self.elements.front()
    }

    fn is_empty(&self) -> bool {
        self.elements.is_empty()
    }

    fn size(&self) -> usize {
        self.elements.len()
    }
}

fn main() {
    let mut queue = Queue::new();
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");

    println!("Front element is: {:?}", queue.peek()); // Some("A")
    println!("Queue size: {}", queue.size()); // 3
    println!("Dequeued: {:?}", queue.dequeue()); // Some("A")
    println!("Is empty: {}", queue.is_empty()); // false
}
`
      },
      { type: ContentBlockType.HEADING, content: '応用例' },
      { 
        type: ContentBlockType.LIST,
        content: [
          'タスクスケジューリング: CPUが複数のプロセスを処理する際、実行待ちのプロセスをキューで管理します。',
          'リソース管理: プリンタの印刷ジョブなど、共有リソースへのアクセス要求を順番に処理するために使われます。',
          '幅優先探索（BFS）: グラフやツリーの探索で、次に訪れるべきノードをキューで管理し、近い順に探索します。',
          'データ転送: ネットワークでデータをパケットとして送受信する際、バッファとしてキューが使われ、データの順序を保証します。',
        ]
      },
    ]
  },
  {
    id: 15,
    slug: 'linked-list',
    title: '連結リスト：動的データ構造の基礎',
    summary: '配列とは異なるメモリ管理を行う「連結リスト」を解説。ノードが次のノードを指し示すことで、柔軟な挿入・削除を可能にする仕組みを学びます。',
    author: 'A. Newell',
    date: '2023-12-08',
    tags: ['データ構造', '連結リスト', 'ポインタ', 'Rust'],
    content: [
      { type: ContentBlockType.HEADING, content: '連結リストとは？' },
      { type: ContentBlockType.PARAGRAPH, content: '連結リストは、データを「ノード」と呼ばれる単位で格納し、各ノードが次のノードへの参照（ポインタ）を持つことで、要素を線形に繋げるデータ構造です。配列のようにメモリ上で連続している必要がなく、データがバラバラに配置されていても構いません。' },
      { type: ContentBlockType.HEADING, content: '配列との比較' },
      {
        type: ContentBlockType.LIST,
        content: [
          'メモリ配置: 配列は連続したメモリ領域を必要としますが、連結リストは個々のノードを別々の場所に配置できます。',
          '要素アクセス: 配列はインデックスによりO(1)でアクセスできますが、連結リストは先頭から順にたどる必要があり、O(n)かかります。',
          '挿入・削除: 配列の途中での挿入・削除は後続要素のシフトが必要でO(n)ですが、連結リストはポインタを繋ぎ変えるだけで済むためO(1)です（対象ノードを見つける時間は除く）。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装（単方向連結リスト）' },
      { type: ContentBlockType.PARAGRAPH, content: 'Rustで連結リストを実装するには、所有権の概念を扱うため `Box<T>` と `Option<T>` を使うのが一般的です。再帰的なデータ構造を安全に表現できます。' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
type Link<T> = Option<Box<Node<T>>>;

struct Node<T> {
    elem: T,
    next: Link<T>,
}

pub struct List<T> {
    head: Link<T>,
}

impl<T> List<T> {
    pub fn new() -> Self {
        List { head: None }
    }

    pub fn push(&mut self, elem: T) {
        let new_node = Box::new(Node {
            elem: elem,
            next: self.head.take(),
        });
        self.head = Some(new_node);
    }

    pub fn pop(&mut self) -> Option<T> {
        self.head.take().map(|node| {
            self.head = node.next;
            node.elem
        })
    }
}

fn main() {
    let mut list = List::new();
    list.push(1);
    list.push(2);
    list.push(3);

    assert_eq!(list.pop(), Some(3));
    assert_eq!(list.pop(), Some(2));
    list.push(4);
    assert_eq!(list.pop(), Some(4));
    assert_eq!(list.pop(), Some(1));
    assert_eq!(list.pop(), None);
}
`
      },
      { type: ContentBlockType.HEADING, content: '長所と短所' },
      { type: ContentBlockType.SUBHEADING, content: '長所' },
      {
        type: ContentBlockType.LIST,
        content: [
          '動的なサイズ: 配列のように最初にサイズを決める必要がなく、自由に要素を追加・削除できます。',
          '効率的な挿入・削除: リストの途中での要素の追加や削除が非常に高速です。'
        ]
      },
      { type: ContentBlockType.SUBHEADING, content: '短所' },
      {
        type: ContentBlockType.LIST,
        content: [
          '低速なアクセス: 特定の要素にアクセスするには、リストの先頭から順にたどる必要があります。',
          '追加のメモリ: データ自体に加えて、次のノードへのポインタを格納するための追加のメモリが必要です。',
          'キャッシュ効率の低下: データがメモリ上に散在するため、CPUキャッシュの恩恵を受けにくく、パフォーマンスが低下することがあります。',
        ]
      }
    ]
  },
  {
    id: 16,
    slug: 'hash-table',
    title: 'ハッシュテーブル：高速アクセスの仕組み',
    summary: 'キーとバリューのペアを効率的に管理するデータ構造「ハッシュテーブル」を解説。ハッシュ関数、衝突解決、そしてその驚異的なパフォーマンスの秘密に迫ります。',
    author: 'H. P. Luhn',
    date: '2023-12-12',
    tags: ['データ構造', 'ハッシュテーブル', 'ハッシュマップ', 'Rust', 'O(1)'],
    content: [
      { type: ContentBlockType.HEADING, content: 'ハッシュテーブルとは？' },
      { type: ContentBlockType.PARAGRAPH, content: 'ハッシュテーブル（またはハッシュマップ）は、キー（Key）を値（Value）に対応付ける連想配列を実現するためのデータ構造です。内部的には配列を使い、ハッシュ関数によってキーから配列のインデックスを計算することで、非常に高速なデータの挿入、検索、削除を可能にします。' },
      { type: ContentBlockType.HEADING, content: '仕組み' },
      {
        type: ContentBlockType.LIST,
        content: [
          'ハッシュ関数: 任意のキーを入力として受け取り、固定長の数値（ハッシュ値）を返す関数です。このハッシュ値を配列のサイズで割った余りをインデックスとして利用します。',
          '配列（バケット）: 計算されたインデックスの位置に値を格納します。',
          '衝突 (Collision): 異なるキーから同じインデックスが計算されてしまうことがあります。これを衝突と呼びます。'
        ]
      },
      { type: ContentBlockType.SUBHEADING, content: '衝突解決法' },
      { type: ContentBlockType.PARAGRAPH, content: '衝突は避けられないため、うまく対処する仕組みが必要です。' },
      {
        type: ContentBlockType.LIST,
        content: [
          'チェイニング法: 同じインデックスにマッピングされた要素を連結リストでつなげて保持します。最も一般的な方法です。',
          'オープンアドレス法: 衝突が発生した場合、配列の別の空きスロットを探してそこにデータを格納します（例：一つ隣のスロットを見る）。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustでの利用 (`HashMap`)' },
      { type: ContentBlockType.PARAGRAPH, content: 'Rustの標準ライブラリには、非常に効率的なハッシュテーブルの実装である `std::collections::HashMap` が用意されています。' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
use std::collections::HashMap;

fn main() {
    // 新しいHashMapを作成
    let mut scores = HashMap::new();

    // キーとバリューを挿入
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    // キーを使って値を取得
    let team_name = String::from("Blue");
    let score = scores.get(&team_name).copied().unwrap_or(0);
    println!("Blue team score: {}", score); // 10

    // HashMapをイテレート
    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }

    // キーの存在を確認
    if scores.contains_key("Red") {
        println!("Red team exists.");
    } else {
        println!("Red team does not exist.");
    }
}
`
      },
      { type: ContentBlockType.HEADING, content: '計算量とトレードオフ' },
      { type: ContentBlockType.PARAGRAPH, content: 'ハッシュテーブルの最大の魅力はその計算量です。' },
      {
        type: ContentBlockType.LIST,
        content: [
          '平均計算量: 挿入、検索、削除のいずれも **O(1)** です。これは、ハッシュ関数によって直接インデックスが計算できるためです。',
          '最悪計算量: 非常に質の悪いハッシュ関数により、すべてのキーが同じインデックスに衝突した場合、チェイニング法の連結リストを線形探索することになり、計算量は **O(n)** となります。しかし、優れたハッシュ関数を使えば、これはほとんど起こりません。'
        ]
      },
      { type: ContentBlockType.PARAGRAPH, content: 'ハッシュテーブルは順序を保持しないため、要素を挿入順やキーの順序でイテレートしたい場合は、`BTreeMap` などの別のデータ構造を検討する必要があります。' }
    ]
  },
  // ========== 探索アルゴリズム ==========
  {
    id: 9,
    slug: 'linear-search',
    title: '線形探索（Linear Search）の基本',
    summary: '最も基本的な探索アルゴリズム、線形探索を解説します。リストの先頭から順に要素を調べていくシンプルな仕組みと、その特徴を学びます。',
    author: 'D. Knuth',
    date: '2023-11-22',
    tags: ['探索', 'アルゴリズム', 'Rust', 'O(n)'],
    content: [
      { type: ContentBlockType.HEADING, content: '線形探索とは？' },
      { type: ContentBlockType.PARAGRAPH, content: '線形探索（リニアサーチ）は、リストや配列の先頭から末尾に向かって、目的の要素が見つかるまで順番に探していく最も単純な探索アルゴリズムです。データがソートされている必要がなく、どんな順序のデータに対しても適用できます。' },
      { type: ContentBlockType.SUBHEADING, content: 'アルゴリズムのステップ' },
      {
        type: ContentBlockType.LIST,
        content: [
          'リストの最初の要素から調べ始めます。',
          '現在の要素が探索対象の要素と一致するかどうかを確認します。',
          '一致すれば、その位置（インデックス）を返して探索を終了します。',
          '一致しなければ、次の要素に移ります。',
          'リストの最後まで探しても見つからなければ、探索は失敗です。',
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
// TがPartialEqトレイトを実装していれば、どんな型のスライスでも検索可能
fn linear_search<T: PartialEq>(arr: &[T], target: &T) -> Option<usize> {
    for (index, item) in arr.iter().enumerate() {
        if item == target {
            return Some(index); // 見つかったらインデックスを返す
        }
    }
    None // 最後まで見つからなければNoneを返す
}

fn main() {
    let numbers = vec![1, 9, 4, 10, 6, 8];
    let target = 10;
    
    match linear_search(&numbers, &target) {
        Some(index) => println!("要素 {} はインデックス {} に見つかりました。", target, index),
        None => println!("要素 {} は見つかりませんでした。", target),
    }

    let names = vec!["Alice", "Bob", "Charlie"];
    let target_name = "Bob";
    match linear_search(&names, &&target_name) { // &"Bob" を渡す
        Some(index) => println!("要素 {} はインデックス {} に見つかりました。", target_name, index),
        None => println!("要素 {} は見つかりませんでした。", target_name),
    }
}
`
      },
      { type: ContentBlockType.HEADING, content: '長所と短所' },
      { type: ContentBlockType.SUBHEADING, content: '長所' },
      {
        type: ContentBlockType.LIST,
        content: [
          'シンプルさ: 実装が非常に簡単で直感的です。',
          '汎用性: データがソートされている必要がなく、どんなリストにも適用できます。',
          '小さなデータセットに有効: 要素数が少ない場合、より複雑なアルゴリズムのオーバーヘッドがなく、十分に高速です。',
        ]
      },
      { type: ContentBlockType.SUBHEADING, content: '短所' },
      {
        type: ContentBlockType.LIST,
        content: [
          '非効率性: データ量が多くなると、パフォーマンスが著しく低下します。時間計算量はO(n)です。',
          'スケーラビリティの欠如: 100万件のデータは、10件のデータの10万倍の時間がかかります。大規模なシステムには不向きです。',
        ]
      }
    ]
  },
  {
    id: 1,
    slug: 'binary-search',
    title: '二分探索（Binary Search）の詳解',
    summary: 'ソート済みのデータ構造から高速に要素を探索するアルゴリズム、二分探索について学びます。その効率性とRustによる実装を解説します。',
    author: 'A. Turing',
    date: '2023-10-26',
    tags: ['探索', 'アルゴリズム', 'Rust', 'O(log n)'],
    content: [
      { type: ContentBlockType.HEADING, content: '二分探索とは？' },
      { type: ContentBlockType.PARAGRAPH, content: '二分探索は、**ソート済みの**配列やリストから特定の要素を効率的に見つけ出すためのアルゴリズムです。探索範囲を毎回半分に絞り込んでいくことで、線形探索に比べて非常に高速に動作します。辞書で単語を探すプロセスに似ています。' },
      { type: ContentBlockType.SUBHEADING, content: 'アルゴリズムのステップ' },
      { 
        type: ContentBlockType.LIST, 
        content: [
          '探索範囲（最初はリスト全体）の左端(low)と右端(high)を設定します。',
          '探索範囲の中央の要素(mid)を取得します。',
          '中央の要素が目的の要素と一致すれば、探索は終了です。',
          '中央の要素が目的の要素より小さい場合、次の探索範囲を中央より右側（`low = mid + 1`）に絞ります。',
          '中央の要素が目的の要素より大きい場合、次の探索範囲を中央より左側（`high = mid - 1`）に絞ります。',
          '探索範囲がなくなる（`low > high`）まで、上記のステップを繰り返します。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
fn binary_search(arr: &[i32], target: i32) -> Option<usize> {
    let mut low = 0;
    // highは最後の要素のインデックス
    let mut high = if arr.is_empty() { 0 } else { arr.len() - 1 };

    // lowがhighを追い越したら探索終了
    while low <= high {
        // オーバーフローを防ぐため (low + high) / 2 の代わりにこの計算方法を推奨
        let mid = low + (high - low) / 2;

        match arr[mid].cmp(&target) {
            std::cmp::Ordering::Less => {
                low = mid + 1;
            }
            std::cmp::Ordering::Greater => {
                // midが0の場合にアンダーフローしないようにチェック
                if mid == 0 { break; }
                high = mid - 1;
            }
            std::cmp::Ordering::Equal => {
                return Some(mid);
            }
        }
    }

    None
}

fn main() {
    let sorted_array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
    let target = 23;
    
    match binary_search(&sorted_array, target) {
        Some(index) => println!("要素 {} はインデックス {} に見つかりました。", target, index),
        None => println!("要素 {} は見つかりませんでした。", target),
    }
}
`
      },
      { type: ContentBlockType.HEADING, content: '実装上の注意点' },
       { 
        type: ContentBlockType.LIST, 
        content: [
          '前提条件: **二分探索が正しく機能するための絶対条件は、対象のデータがソート済みであることです。** これが守られていない場合、誤った結果を返すか、要素を見つけられません。',
          'オーバーフロー: `let mid = (low + high) / 2;` という計算は、`low`と`high`が非常に大きい場合にオーバーフローを起こす可能性があります。`let mid = low + (high - low) / 2;` とすることでこれを防げます。',
          '無限ループ: ループの終了条件（`low < high` or `low <= high`）や `low`, `high` の更新ロジックを誤ると、無限ループに陥ることがあります。'
        ]
      },
      { type: ContentBlockType.HEADING, content: '計算量' },
      { type: ContentBlockType.SUBHEADING, content: '時間計算量: O(log n)' },
      { type: ContentBlockType.PARAGRAPH, content: 'データセットのサイズがnの場合、探索は一度の比較で探索範囲を半分に絞ります。そのため、計算回数は約log₂(n)回となり、非常に高速です。100万件のデータでも、たった20回程度の比較で見つけ出せます。' },
      { type: ContentBlockType.SUBHEADING, content: '空間計算量: O(1)' },
      { type: ContentBlockType.PARAGRAPH, content: '反復による実装の場合、追加のメモリ使用量はデータセットのサイズに依存せず一定です。（再帰で実装した場合はO(log n)のコールスタック領域が必要です）' },
    ],
  },
  // ========== グラフアルゴリズム ==========
  {
    id: 17,
    slug: 'intro-to-graph-theory',
    title: 'グラフ理論の基礎',
    summary: 'SNSの友人関係から道路網まで、物事の「つながり」を表現するグラフ理論の基本を解説。頂点、辺、隣接リストなどの概念を学び、より高度なアルゴリズムへの扉を開きます。',
    author: 'L. Euler',
    date: '2023-12-15',
    tags: ['グラフ', 'データ構造', '基礎', '計算機科学'],
    content: [
      { type: ContentBlockType.HEADING, content: 'グラフとは何か？' },
      { type: ContentBlockType.PARAGRAPH, content: 'グラフ理論におけるグラフとは、いくつかの「頂点（ノード）」と、それらを結ぶ「辺（エッジ）」の集合で構成されるデータ構造です。現実世界の様々な関係性をモデル化するのに非常に強力なツールです。例えば、都市を頂点、都市間の道路を辺と見なせば、道路網はグラフとして表現できます。' },
      { type: ContentBlockType.HEADING, content: 'グラフの基本用語' },
      {
        type: ContentBlockType.LIST,
        content: [
          '頂点 (Vertex / Node): グラフの要素。人、場所、オブジェクトなどを表します。',
          '辺 (Edge): 2つの頂点を結ぶ線。関係性、接続、経路などを表します。',
          '有向グラフ (Directed Graph): 辺に向きがあるグラフ。A→B は B→A とは異なります。Webページのリンクや、SNSのフォロー関係などが例です。',
          '無向グラフ (Undirected Graph): 辺に向きがないグラフ。A-B は B-A と同じです。SNSの友達関係（相互）などが例です。',
          '重み付きグラフ (Weighted Graph): 各辺に「重み」や「コスト」と呼ばれる数値が関連付けられたグラフ。地図アプリの道路の距離や所要時間などが例です。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'グラフの表現方法' },
      { type: ContentBlockType.PARAGRAPH, content: 'プログラムでグラフを扱うには、主に2つの表現方法があります。' },
      { type: ContentBlockType.SUBHEADING, content: '1. 隣接リスト (Adjacency List)' },
      { type: ContentBlockType.PARAGRAPH, content: '各頂点ごとに、その頂点から直接つながっている他の頂点のリストを保持する方法です。Rustでは `HashMap<V, Vec<V>>` のように表現できます。辺の数が少ない「疎なグラフ」の場合に、メモリ効率が良いです。' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
use std::collections::HashMap;

fn main() {
    // 頂点0は1と2に、頂点1は2に...といった関係性を表現
    let mut adj_list: HashMap<i32, Vec<i32>> = HashMap::new();
    adj_list.insert(0, vec![1, 2]);
    adj_list.insert(1, vec![2]);
    adj_list.insert(2, vec![0, 3]);
    adj_list.insert(3, vec![3]);
    
    println!("Node 2 is connected to: {:?}", adj_list.get(&2));
}
`
      },
      { type: ContentBlockType.SUBHEADING, content: '2. 隣接行列 (Adjacency Matrix)' },
      { type: ContentBlockType.PARAGRAPH, content: 'V x V の二次元配列（Vは頂点の数）を用意し、頂点iと頂点jの間に辺があれば `matrix[i][j] = 1`（重み付きなら重みの値）、なければ `0` を格納する方法です。辺の有無をO(1)で確認できますが、頂点数が増えるとメモリ消費がO(V²)で増大するため、辺の数が多い「密なグラフ」に向いています。' },
      { type: ContentBlockType.HEADING, content: 'グラフアルゴリズムの応用' },
      { type: ContentBlockType.PARAGRAPH, content: 'グラフ構造を理解することで、以下のような様々な問題を解決できます。' },
      {
        type: ContentBlockType.LIST,
        content: [
          '経路探索: Googleマップのようなナビゲーションシステム（ダイクストラ法、A*アルゴリズム）。',
          'ネットワーク分析: SNSでの影響力のある人物の特定や、通信ネットワークのボトルネック検出。',
          '依存関係の解決: コンパイラのビルド順序や、ソフトウェアのパッケージ管理（トポロジカルソート）。',
          'マッチング: 求人サイトでの応募者と企業の最適な組み合わせの発見。',
        ]
      }
    ]
  },
  {
    id: 6,
    slug: 'depth-first-search',
    title: '深さ優先探索（DFS）の徹底解説',
    summary: 'グラフやツリー構造を探索するための基本的なアルゴリズム、深さ優先探索（DFS）について学びます。再帰を使ったエレガントな実装と、その応用例を探ります。',
    author: 'C. P. Trémaux',
    date: '2023-11-15',
    tags: ['探索', 'グラフ', 'アルゴリズム', 'Rust', '再帰', 'スタック'],
    content: [
      { type: ContentBlockType.HEADING, content: '深さ優先探索とは？' },
      { type: ContentBlockType.PARAGRAPH, content: '深さ優先探索（Depth-First Search, DFS）は、グラフやツリーの探索アルゴリズムの一つです。探索を開始したノードから、可能な限り深く進んでいき、行き止まりに達したら一つ前のノードに戻って（バックトラック）、別の未探索の経路を試す、という動きを繰り返します。この性質は、実装にスタック（再帰呼び出しによるコールスタック）を利用することで実現されます。' },
      { type: ContentBlockType.SUBHEADING, content: 'アルゴリズムのステップ（再帰版）' },
      { 
        type: ContentBlockType.LIST, 
        content: [
          '現在のノードを「訪問済み」としてマークします。',
          '現在のノードに対して処理を行います（例：値の表示）。',
          '現在のノードに隣接する「未訪問の」ノードを一つ選び、そのノードを始点として再帰的にDFSを呼び出します。',
          'すべての隣接ノードが訪問済みになるまで繰り返します。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装（隣接リスト）' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
use std::collections::{HashMap, HashSet};

type Graph = HashMap<i32, Vec<i32>>;

// visitedをHashSetにすることで、検索が高速になります
fn dfs(graph: &Graph, start_node: i32, visited: &mut HashSet<i32>) {
    // 既に訪問済みなら何もしない
    if !visited.insert(start_node) {
        return;
    }
    
    println!("Visiting node: {}", start_node);

    if let Some(neighbors) = graph.get(&start_node) {
        for &neighbor in neighbors {
            // 隣接ノードが未訪問なら再帰呼び出し
            if !visited.contains(&neighbor) {
                dfs(graph, neighbor, visited);
            }
        }
    }
}

fn main() {
    let mut graph: Graph = HashMap::new();
    graph.insert(0, vec![1, 2]);
    graph.insert(1, vec![2]);
    graph.insert(2, vec![0, 3]);
    graph.insert(3, vec![3]);

    let mut visited = HashSet::new();
    
    println!("DFS starting from node 2:");
    dfs(&graph, 2, &mut visited);
}
`
      },
      { type: ContentBlockType.HEADING, content: 'BFSとの比較' },
       {
        type: ContentBlockType.LIST,
        content: [
            'データ構造: DFSはスタック（再帰）を使いますが、BFSはキューを使います。',
            '探索順序: DFSは「深く」進むことを優先し、BFSは「広く」進むことを優先します。',
            'メモリ使用量: グラフが縦に長い（深い）場合、DFSの再帰スタックが深くなりメモリを多く消費する可能性があります。逆にグラフが横に広い場合、BFSのキューが大きくなりメモリを多く消費します。',
            '応用: DFSは連結成分の検出やトポロジカルソートに適しており、BFSは重みなしグラフの最短経路問題に適しています。',
        ]
      },
      { type: ContentBlockType.HEADING, content: '応用例' },
      {
        type: ContentBlockType.LIST,
        content: [
            '迷路の探索: 一つの通路を突き当たるまで進み、ダメなら戻って別の通路を試す動きがDFSそのものです。',
            '連結成分の検出: グラフがいくつの島（連結した部分グラフ）に分かれているかを数えるのに使えます。',
            'トポロジカルソート: タスクの依存関係（Aが終わらないとBが始められない等）を解決し、実行可能な順序を導き出します。',
            'サイクル検出: グラフ内に閉路（サイクル）があるかどうかを検出できます。'
        ]
      }
    ],
  },
  {
    id: 10,
    slug: 'breadth-first-search',
    title: '幅優先探索（BFS）の完全ガイド',
    summary: 'グラフ探索のもう一つの基本、幅優先探索（BFS）を探ります。キューを用いた層ごとの探索方法と、最短経路問題への応用を学びます。',
    author: 'E. F. Moore',
    date: '2023-11-25',
    tags: ['探索', 'グラフ', 'アルゴリズム', 'Rust', 'キュー'],
    content: [
      { type: ContentBlockType.HEADING, content: '幅優先探索とは？' },
      { type: ContentBlockType.PARAGRAPH, content: '幅優先探索（Breadth-First Search, BFS）は、グラフやツリーの探索アルゴリズムで、開始ノードに近いノードから順に「幅広く」探索していく手法です。開始ノードから見て同じ階層（深さ）にあるノードをすべて探索してから、次の階層に移ります。この特性は、実装にキューを利用することで実現されます。' },
      { type: ContentBlockType.SUBHEADING, content: 'アルゴリズムのステップ' },
      {
        type: ContentBlockType.LIST,
        content: [
          'キュー（Queue）と訪問済みセット（Set）を用意します。',
          '開始ノードをキューに入れ、「訪問済み」セットにも追加します。',
          'キューが空になるまで、以下の処理を繰り返します。',
          '  a. キューの先頭からノードを取り出します（デキュー）。',
          '  b. 取り出したノードに対して処理を行います。',
          '  c. 取り出したノードに隣接するノードのうち、まだ「訪問済み」でないものをすべて探し、それぞれを訪問済みセットとキューに追加します。',
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装（隣接リスト）' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
use std::collections::{HashMap, VecDeque, HashSet};

type Graph = HashMap<i32, Vec<i32>>;

fn bfs(graph: &Graph, start_node: i32) {
    let mut visited = HashSet::new();
    let mut queue = VecDeque::new();

    visited.insert(start_node);
    queue.push_back(start_node);

    while let Some(node) = queue.pop_front() {
        println!("Visiting node: {}", node);

        if let Some(neighbors) = graph.get(&node) {
            for &neighbor in neighbors {
                if !visited.contains(&neighbor) {
                    visited.insert(neighbor);
                    queue.push_back(neighbor);
                }
            }
        }
    }
}

fn main() {
    let mut graph: Graph = HashMap::new();
    graph.insert(0, vec![1, 2]);
    graph.insert(1, vec![2]);
    graph.insert(2, vec![0, 3]);
    graph.insert(3, vec![3]);

    println!("BFS starting from node 2:");
    bfs(&graph, 2);
}
`
      },
      { type: ContentBlockType.HEADING, content: 'BFSの最も重要な特性：最短経路' },
      { type: ContentBlockType.PARAGRAPH, content: 'BFSの最大の強みは、**辺の重みがすべて同じ（または重みがない）グラフにおいて、開始ノードから他のすべてのノードへの最短経路（最小の辺の数）を見つけられる**ことです。これは、開始ノードから1ステップ、2ステップ、3ステップ...と、距離が近い順に探索を進めるためです。' },
      { type: ContentBlockType.HEADING, content: '応用例' },
      {
        type: ContentBlockType.LIST,
        content: [
          '最短経路問題: 地図で乗り換え回数が最も少ない経路を探す場合など。',
          'SNSの友達検索: 「友達の友達」など、自分から近い関係性の人をリストアップするのに使われます。',
          'ネットワークブロードキャスト: ネットワーク内で、あるノードから他の全ノードにメッセージを効率的に送信する際のシミュレーション。',
          'チェスのナイトの最小移動回数: チェス盤上の特定のマから別のマスへ、ナイトが最小何手で移動できるかを計算する問題。'
        ]
      },
    ]
  },
  // ========== ソートアルゴリズム ==========
  {
    id: 2,
    slug: 'bubble-sort',
    title: 'バブルソート（Bubble Sort）の基本',
    summary: 'ソートアルゴリズムの入門としてよく知られるバブルソート。その仕組み、Rustでの実装、そして計算量の観点からの評価を詳しく解説します。',
    author: 'G. Boole',
    date: '2023-10-22',
    tags: ['ソート', 'アルゴリズム', 'Rust', 'O(n^2)'],
    content: [
      { type: ContentBlockType.HEADING, content: 'バブルソートとは？' },
      { type: ContentBlockType.PARAGRAPH, content: 'バブルソートは、隣り合う要素の大小を比較しながら整列させていく、最もシンプルなソートアルゴリズムの一つです。水中の泡（バブル）が軽いものから上っていく様子に似ていることからこの名前が付けられました。' },
      { type: ContentBlockType.SUBHEADING, content: 'アルゴリズムのステップ' },
      { 
        type: ContentBlockType.LIST, 
        content: [
          'リストの先頭から末尾に向かって、隣り合う2つの要素を比較します。',
          '左の要素が右の要素より大きい場合、それらを交換（swap）します。',
          'リストの末尾までこの操作を繰り返します。この1回のパスで、最も大きい要素がリストの末尾に配置されます。',
          '末尾の要素を除いた範囲で、リスト全体がソート済みになるまで上記のパスを繰り返します。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装（最適化版）' },
      { type: ContentBlockType.PARAGRAPH, content: 'あるパスで一度も交換が発生しなかった場合、その時点でリストは完全にソート済みであることがわかります。このチェックを入れることで、不必要なループを避けることができます。' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
fn bubble_sort<T: Ord>(arr: &mut [T]) {
    if arr.is_empty() { return; }
    let n = arr.len();
    for i in 0..n {
        let mut swapped = false;
        // i回パスを終えると末尾i個の要素はソート済みなので、比較範囲を狭める
        for j in 0..n - 1 - i {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
                swapped = true;
            }
        }
        // このパスで交換がなければ、ソート完了
        if !swapped {
            break;
        }
    }
}

fn main() {
    let mut numbers = vec![64, 34, 25, 12, 22, 11, 90];
    bubble_sort(&mut numbers);
    println!("ソート後: {:?}", numbers);
}
`
      },
      { type: ContentBlockType.HEADING, content: '長所と短所' },
      { type: ContentBlockType.SUBHEADING, content: '長所' },
      { type: ContentBlockType.LIST, content: ['実装が非常にシンプルで理解しやすい。', '空間計算量がO(1)であり、追加のメモリを必要としない（インプレースソート）。'] },
      { type: ContentBlockType.SUBHEADING, content: '短所' },
      { type: ContentBlockType.LIST, content: ['時間計算量がO(n²)であり、データ量が増えると極端に遅くなる。', '実用的なアプリケーションで使われることはほとんどない。'] },
      { type: ContentBlockType.HEADING, content: 'いつ使うべきか？' },
      { type: ContentBlockType.PARAGRAPH, content: 'バブルソートは、教育目的や、ソートアルゴリズムの基本を学ぶ最初のステップとして非常に優れています。しかし、その性能の低さから、本番環境のコードや大規模なデータセットに対して使用することは推奨されません。' }
    ],
  },
  {
    id: 7,
    slug: 'selection-sort',
    title: '選択ソート（Selection Sort）の探求',
    summary: '基本的なソートアルゴリズムの一つ、選択ソートを学びます。未ソート部分から最小値を選択し、整列させていく直感的なプロセスを解説します。',
    author: 'A. Lovelace',
    date: '2023-11-18',
    tags: ['ソート', 'アルゴリズム', 'Rust', 'O(n^2)'],
    content: [
      { type: ContentBlockType.HEADING, content: '選択ソートとは？' },
      { type: ContentBlockType.PARAGRAPH, content: '選択ソートは、リストの中から最小（または最大）の要素を見つけ出し、それをリストのソート済み部分の末尾（未ソート部分の先頭）と交換していくことで整列を行うアルゴリズムです。' },
      { type: ContentBlockType.SUBHEADING, content: 'アルゴリズムのステップ' },
      {
        type: ContentBlockType.LIST,
        content: [
          'リスト全体を未ソート部分とみなします。',
          '未ソート部分から、最小値を持つ要素を探し出します。',
          '見つかった最小値の要素を、未ソート部分の先頭要素と交換します。',
          '交換された先頭要素はソート済み部分となり、未ソート部分を一つ後ろにずらします。',
          '未ソート部分がなくなるまで、上記のステップを繰り返します。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
fn selection_sort<T: Ord>(arr: &mut [T]) {
    let n = arr.len();
    for i in 0..n {
        let mut min_index = i;
        for j in (i + 1)..n {
            if arr[j] < arr[min_index] {
                min_index = j;
            }
        }
        // 最小要素が現在の位置と異なる場合のみ交換
        if i != min_index {
            arr.swap(i, min_index);
        }
    }
}

fn main() {
    let mut numbers = vec![64, 25, 12, 22, 11];
    selection_sort(&mut numbers);
    println!("ソート後: {:?}", numbers);
}
`
      },
      { type: ContentBlockType.HEADING, content: 'バブルソートとの比較' },
      { type: ContentBlockType.PARAGRAPH, content: '選択ソートとバブルソートは、ともにO(n²)の単純なソートですが、重要な違いがあります。' },
      {
        type: ContentBlockType.LIST,
        content: [
          '比較回数: どちらも約 n²/2 回の比較を行います。',
          '交換回数: バブルソートは最悪の場合、比較のたびに交換が発生しますが、選択ソートは外側のループ1回につき最大1回しか交換を行いません（合計でn-1回）。要素の交換コストが高い場合に、選択ソートが有利になることがあります。'
        ]
      },
      { type: ContentBlockType.SUBHEADING, content: '長所と短所' },
      { type: ContentBlockType.LIST, content: ['**長所**: 実装がシンプル。交換回数が少ない。', '**短所**: O(n²)で非効率。データの初期状態に関わらず常に同じ計算量がかかる。'] },
    ],
  },
   {
    id: 14,
    slug: 'insertion-sort',
    title: '挿入ソート（Insertion Sort）の仕組み',
    summary: 'ソート済みの部分に新しい要素を適切な位置へ「挿入」していくことで整列させる挿入ソートを解説。データがほぼ整列済みの場合に高い性能を発揮します。',
    author: 'D. L. Shell',
    date: '2023-12-07',
    tags: ['ソート', 'アルゴリズム', 'Rust', 'O(n^2)'],
    content: [
      { type: ContentBlockType.HEADING, content: '挿入ソートとは？' },
      { type: ContentBlockType.PARAGRAPH, content: '挿入ソートは、手札のトランプを整理するときの動きに似たソートアルゴリズムです。リストの未ソート部分から要素を一つずつ取り出し、それをソート済み部分の適切な位置に挿入していきます。' },
      { type: ContentBlockType.SUBHEADING, content: 'アルゴリズムのステップ' },
      {
        type: ContentBlockType.LIST,
        content: [
          'リストの最初の要素は、それ自体でソート済みとみなします。',
          '2番目の要素から始め、最後の要素まで以下の処理を繰り返します。',
          '  a. 現在の要素（キー）を一時的に保存します。',
          '  b. ソート済みの部分を右から左へ見ていき、キーより大きい要素を一つ右にずらします。',
          '  c. キー以下の要素が見つかるか、ソート済み部分の先頭に達したら、その位置にキーを挿入します。',
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
fn insertion_sort<T: Ord>(arr: &mut [T]) {
    for i in 1..arr.len() {
        let mut j = i;
        while j > 0 && arr[j - 1] > arr[j] {
            arr.swap(j - 1, j);
            j -= 1;
        }
    }
}

fn main() {
    let mut numbers = vec![12, 11, 13, 5, 6];
    insertion_sort(&mut numbers);
    println!("ソート後: {:?}", numbers);
}
`
      },
      { type: ContentBlockType.HEADING, content: '長所と短所' },
      { type: ContentBlockType.SUBHEADING, content: '長所' },
      {
        type: ContentBlockType.LIST,
        content: [
          '実装がシンプル。',
          'データがほとんどソート済みの場合、非常に高速（O(n)に近い）に動作する（適応性）。',
          'オンラインアルゴリズムとして利用可能（データが順次追加されても効率的にソートを維持できる）。',
          '安定ソートである（同じ値の要素の相対的な順序が保たれる）。',
          '空間計算量がO(1)（インプレース）。',
        ]
      },
      { type: ContentBlockType.SUBHEADING, content: '短所' },
      { type: ContentBlockType.LIST, content: ['平均および最悪計算量がO(n²)であり、大規模なデータやランダムなデータには不向き。'] },
      { type: ContentBlockType.PARAGRAPH, content: 'この「ほぼソート済みなら高速」という特性から、より高度なソートアルゴリズム（ティムソートなど）の内部で、小さな部分配列のソートに使われることがあります。' }
    ],
  },
  {
    id: 5,
    slug: 'merge-sort',
    title: 'マージソート（Merge Sort）の分割統治法',
    summary: '効率的なソートアルゴリズムであるマージソートを解説します。分割統治法という強力なアプローチを学び、Rustでの安定した実装を確認します。',
    author: 'J. von Neumann',
    date: '2023-11-10',
    tags: ['ソート', 'アルゴリズム', 'Rust', 'O(n log n)', '分割統治法'],
    content: [
      { type: ContentBlockType.HEADING, content: 'マージソートとは？' },
      { type: ContentBlockType.PARAGRAPH, content: 'マージソートは、「分割統治法」というアプローチに基づく非常に効率的なソートアルゴリズムです。データを再帰的に最小単位まで分割し、その後、それらを正しい順序で結合（マージ）していくことで全体のソートを完成させます。' },
      { type: ContentBlockType.SUBHEADING, content: 'アルゴリズムのステップ' },
      { 
        type: ContentBlockType.LIST, 
        content: [
          '分割 (Divide): ソート対象のリストを、要素が1つになるまで再帰的に半分に分割し続けます。',
          '統治 (Conquer): 要素が1つのリストは、それ自体がソート済みとみなせます。',
          '結合 (Combine/Merge): 分割した2つのソート済み部分リストを、先頭から比較して小さい方から順に新しいリストに詰めていくことで、1つのソート済みリストにマージします。これを再帰的に繰り返します。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
// Tは順序比較可能で、コピー可能である必要がある
fn merge_sort<T: Ord + Copy>(arr: &mut [T]) {
    let n = arr.len();
    if n > 1 {
        let mid = n / 2;
        merge_sort(&mut arr[0..mid]);
        merge_sort(&mut arr[mid..n]);
        merge(arr, mid);
    }
}

fn merge<T: Ord + Copy>(arr: &mut [T], mid: usize) {
    let left = arr[0..mid].to_vec();
    let right = arr[mid..].to_vec();
    
    let mut l = 0;
    let mut r = 0;
    let mut i = 0;

    while l < left.len() && r < right.len() {
        if left[l] <= right[r] {
            arr[i] = left[l];
            l += 1;
        } else {
            arr[i] = right[r];
            r += 1;
        }
        i += 1;
    }

    while l < left.len() {
        arr[i] = left[l];
        l += 1;
        i += 1;
    }
    while r < right.len() {
        arr[i] = right[r];
        r += 1;
        i += 1;
    }
}

fn main() {
    let mut numbers = vec![38, 27, 43, 3, 9, 82, 10];
    merge_sort(&mut numbers);
    println!("ソート後: {:?}", numbers);
}
`
      },
      { type: ContentBlockType.HEADING, content: '長所と短所' },
      { type: ContentBlockType.SUBHEADING, content: '長所' },
      { 
        type: ContentBlockType.LIST,
        content: [
          '安定したパフォーマンス: 時間計算量が常にO(n log n)であり、クイックソートのように最悪のケースを心配する必要がありません。',
          '安定ソート: 同じ値を持つ要素の相対的な順序がソート後も保たれます。これはオブジェクトの複合的なソートなどで重要になります。',
          '並列化が容易: 分割された部分配列を並列にソートすることができます。'
        ]
      },
       { type: ContentBlockType.SUBHEADING, content: '短所' },
      { 
        type: ContentBlockType.LIST,
        content: [
          '追加のメモリが必要: マージ処理のために、元の配列と同じサイズの一時的な作業領域が必要です。空間計算量はO(n)となり、メモリが非常に限られた環境では問題になることがあります。'
        ]
      }
    ],
  },
  {
    id: 8,
    slug: 'quick-sort',
    title: 'クイックソート（Quick Sort）の実装',
    summary: '実用的なソートアルゴリズムの代表格、クイックソートを解説します。ピボットを選択し分割統治法を適用する高速な手法を学びます。',
    author: 'T. Hoare',
    date: '2023-11-20',
    tags: ['ソート', 'アルゴリズム', 'Rust', 'O(n log n)', '分割統治法'],
    content: [
      { type: ContentBlockType.HEADING, content: 'クイックソートとは？' },
      { type: ContentBlockType.PARAGRAPH, content: 'クイックソートは、分割統治法に基づく非常に効率的なソートアルゴリズムです。リスト内から「ピボット」と呼ばれる基準値を一つ選び、ピボットより小さい要素のグループと大きい要素のグループにリストを分割します。そして、分割された各グループに対して再帰的に同じ処理を繰り返すことで、最終的にリスト全体をソートします。' },
      { type: ContentBlockType.HEADING, content: 'アルゴリズムのステップ (Lomutoパーティション方式)' },
      {
        type: ContentBlockType.LIST,
        content: [
          'リストからピボットを一つ選択します。（例：最後の要素）',
          'ピボット未満の要素をリストの左側に、ピボット以上の要素を右側に集めるように、要素を再配置（パーティション化）します。',
          '最終的にピボットを、小さいグループと大きいグループの間に配置します。この時点でピボットはソート後の正しい位置に確定します。',
          'ピボットの左側と右側の2つの部分配列に対して、再帰的にクイックソートを適用します。',
        ]
      },
       { type: ContentBlockType.HEADING, content: 'ピボットの選び方の重要性' },
      { type: ContentBlockType.PARAGRAPH, content: 'クイックソートの性能は、ピボットの選び方に大きく依存します。理想的なピボットは、データを常に均等に近いサイズに分割する値（中央値）です。' },
      {
        type: ContentBlockType.LIST,
        content: [
            '悪い選択: 常に最小値や最大値をピボットに選んでしまうと、分割が `n-1` と `0` のように極端に偏り、計算量は最悪のO(n²)に低下します。データが既にソート済みの場合に、常に先頭や末尾の要素をピボットにするとこの状況が発生します。',
            '良い選択: ランダムに選ぶ、または「3つの数の中央値（median-of-three）」法（先頭・中央・末尾の3要素の中央値をピボットにする）などの手法で、最悪ケースを回避しやすくなります。'
        ]
      },
      { type: ContentBlockType.HEADING, content: 'Rustによる実装' },
      {
        type: ContentBlockType.CODE,
        language: 'rust',
        content: `
fn quick_sort<T: Ord>(arr: &mut [T]) {
    if arr.len() > 1 {
        let pivot_index = partition(arr);
        // ピボット自身は含まない
        quick_sort(&mut arr[0..pivot_index]);
        // pivot_index + 1 が範囲外にならないようにチェック
        if pivot_index + 1 < arr.len() {
            quick_sort(&mut arr[pivot_index + 1..]);
        }
    }
}

// Lomuto partition scheme
fn partition<T: Ord>(arr: &mut [T]) -> usize {
    let pivot_index = arr.len() - 1;
    let mut i = 0; // index for smaller element
    for j in 0..pivot_index {
        if arr[j] <= arr[pivot_index] {
            arr.swap(i, j);
            i += 1;
        }
    }
    arr.swap(i, pivot_index);
    i
}

fn main() {
    let mut numbers = vec![10, 7, 8, 9, 1, 5];
    quick_sort(&mut numbers);
    println!("ソート後: {:?}", numbers);
}
`
      },
      { type: ContentBlockType.HEADING, content: '長所と短所' },
      { type: ContentBlockType.SUBHEADING, content: '長所' },
      { type: ContentBlockType.LIST, content: ['平均時間計算量がO(n log n)と非常に高速。', 'インプレースでソートするため、空間計算量がO(log n)と少ない（マージソートはO(n)）。', 'キャッシュ効率が良く、実際にはマージソートより高速に動作することが多い。'] },
       { type: ContentBlockType.SUBHEADING, content: '短所' },
      { type: ContentBlockType.LIST, content: ['最悪時間計算量がO(n²)。ピボットの選び方が悪いと性能が劇的に低下する。', '安定ソートではない。同じ値の要素の順序が入れ替わる可能性がある。'] },
    ],
  },
];

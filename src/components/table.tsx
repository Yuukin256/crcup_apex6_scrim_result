import { TableContainer, Table, TableHead, TableBody, TableRow } from '@material-ui/core';
import React from 'react';
import TableCell from './improvedTableCell';
import { calculatePlacementPoint } from '../utils/calculator';

interface InputResult {
  match: number;
  teams: {
    number: number;
    placement: number | '-';
    kills: number | '-';
    crKills: number | '-';
  }[];
}

interface Result {
  match: number;
  placement: number | '-';
  kills: number | '-';
  crKills: number | '-';
  points: number;
}

interface TeamResult {
  number: number;
  name: string;
  rank: number;
  totalPlacementPoints: number;
  totalKillPoints: number;
  totalPoints: number;
  results: Result[];
}

const borderRight: React.CSSProperties = {
  borderRight: '1px solid rgba(224, 224, 224, 1)',
};

const placementColor = (placement: number | '-'): React.CSSProperties => {
  switch (placement) {
    case 1:
      return { backgroundColor: '#DBB400' };
    case 2:
      return { backgroundColor: '#B2BABA' };
    case 3:
      return { backgroundColor: '#AE6938' };
    default:
      return {};
  }
};

const HeadRow1: React.VFC = () => (
  <TableRow>
    <TableCell colSpan={5} style={borderRight}></TableCell>
    {Array(7)
      .fill(null)
      .map((_, i) => (
        <TableCell colSpan={4} align="center" style={i !== 6 ? borderRight : {}} key={i}>
          {i + 1}試合目
        </TableCell>
      ))}
  </TableRow>
);

const HeadRow2: React.VFC = () => (
  <TableRow>
    <TableCell align="center">総合順位</TableCell>
    <TableCell width={200} align="center">
      チーム
    </TableCell>
    <TableCell>合計ポイント</TableCell>
    <TableCell>合計順位ポイント</TableCell>
    <TableCell style={borderRight}>合計キルポイント</TableCell>
    {Array(7)
      .fill(null)
      .flatMap((_, i) => [
        <TableCell key={i + 'a'}>順位</TableCell>,
        <TableCell key={i + 'b'}>キル数</TableCell>,
        <TableCell key={i + 'c'} title={'CR選手の確定キル数'}>
          CRキル数
        </TableCell>,
        <TableCell style={i !== 6 ? borderRight : {}} key={i + 'd'}>
          ポイント
        </TableCell>,
      ])}
  </TableRow>
);

interface Props {
  result: InputResult[];
}

const ResultTable: React.VFC<Props> = (props) => {
  const results: TeamResult[] = [
    {
      number: 1,
      name: 'トロールアイス渋谷店',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 2,
      name: 'Rasチーム',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 3,
      name: 'くるみぜだぁちーず',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 4,
      name: 'もちもまんたマリア号',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 5,
      name: 'Cute Cheat Neet',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 6,
      name: '花の白玉乙女',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 7,
      name: '別ゲープレデター',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 8,
      name: '脳筋鼓膜殺し',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 9,
      name: 'We Are the World',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 10,
      name: 'Cptチーム',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 11,
      name: '〇Y〇Y',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 12,
      name: 'k4senチーム',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 13,
      name: 'キンキャニ戦隊ウルセンジャー',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 14,
      name: '宮崎卍リベンジャーズ',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 15,
      name: '嘘つきHamsters',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 16,
      name: '全員ジブ卒',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 17,
      name: 'ばぶちゃんず',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 18,
      name: '夢女子卍會',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 19,
      name: 'サラ金カワカミくんi7',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 20,
      name: 'ボドカチーム',
      rank: 0,
      totalPlacementPoints: 0,
      totalKillPoints: 0,
      totalPoints: 0,
      results: [],
    },
  ];

  props.result.forEach((match) => {
    match.teams.forEach((team) => {
      const placementPoints = calculatePlacementPoint(team.placement);
      const killPoints = (team.kills === '-' ? 0 : team.kills) + (team.crKills === '-' ? 0 : team.crKills * 2);
      const result: Result = {
        match: match.match,
        placement: team.placement,
        kills: team.kills,
        crKills: team.crKills,
        points: placementPoints + killPoints,
      };
      results[team.number - 1].results.push(result);
      results[team.number - 1].totalPlacementPoints += placementPoints;
      results[team.number - 1].totalKillPoints += killPoints;
      results[team.number - 1].totalPoints += placementPoints + killPoints;
    });
  });

  return (
    <TableContainer>
      <Table size="small">
        <TableHead style={{ borderTop: '1px solid rgba(224, 224, 224, 1)', backgroundColor: '#fafafa' }}>
          <HeadRow1></HeadRow1>
          <HeadRow2></HeadRow2>
        </TableHead>
        <TableBody>
          {results
            .sort((a, b) => {
              if (a.totalPoints !== b.totalPoints) {
                return b.totalPoints - a.totalPoints;
              }
              return Math.max(...b.results.map((v) => v.points)) - Math.max(...a.results.map((v) => v.points));
            })
            .map((teamResult, i) => (
              <TableRow hover key={i}>
                <TableCell align="right">{i + 1}</TableCell>
                <TableCell>{teamResult.name}</TableCell>
                <TableCell>
                  <b>{teamResult.totalPoints}</b>
                </TableCell>
                <TableCell>{teamResult.totalPlacementPoints}</TableCell>
                <TableCell style={borderRight}>{teamResult.totalKillPoints}</TableCell>
                {teamResult.results.flatMap((match) => {
                  const pp = calculatePlacementPoint(match.placement);
                  return [
                    <TableCell
                      key="placement"
                      title={`${pp}ポイント`}
                      align="right"
                      style={placementColor(match.placement)}
                    >
                      {match.placement}
                    </TableCell>,
                    <TableCell key="kills" align="right">
                      {match.kills}
                    </TableCell>,
                    <TableCell key="cr" align="right">
                      {match.crKills}
                    </TableCell>,
                    <TableCell align="right" style={match.match !== 7 ? borderRight : {}} key="points">
                      {match.points}
                    </TableCell>,
                  ];
                })}
              </TableRow>
            ))}
        </TableBody>
        <TableHead style={{ borderTop: '1px solid rgba(224, 224, 224, 1)', backgroundColor: '#fafafa' }}>
          <HeadRow2></HeadRow2>
          <HeadRow1></HeadRow1>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;

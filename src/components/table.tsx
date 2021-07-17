import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core';
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
  totalPoints: number;
  results: Result[];
}

interface Props {
  result: InputResult[];
}

const ResultTable: React.VFC<Props> = (props) => {
  const results: TeamResult[] = [
    {
      number: 1,
      name: 'トロールアイス渋谷店',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 2,
      name: 'Rasチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 3,
      name: 'くるみぜだぁちーず',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 4,
      name: 'Mondoチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 5,
      name: 'まさのりチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 6,
      name: '花の白玉乙女',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 7,
      name: 'Ruチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 8,
      name: '脳筋鼓膜殺し',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 9,
      name: 'We Are the World',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 10,
      name: 'Cptチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 11,
      name: '天月チーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 12,
      name: 'k4senチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 13,
      name: 'キンキャニ戦隊ウルセンジャー',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 14,
      name: 'だるまチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 15,
      name: '嘘つきHamsters',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 16,
      name: 'Wokkaチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 17,
      name: 'ばぶちゃんず',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 18,
      name: 'カワセチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 19,
      name: 'NIRUチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
    {
      number: 20,
      name: 'ボドカチーム',
      rank: 0,
      totalPoints: 0,
      results: [],
    },
  ];

  props.result.forEach((match) => {
    match.teams.forEach((team) => {
      const result: Result = {
        match: match.match,
        placement: team.placement,
        kills: team.kills,
        crKills: team.crKills,
        points:
          calculatePlacementPoint(team.placement) +
          (team.kills === '-' ? 0 : team.kills) +
          (team.crKills === '-' ? 0 : team.crKills * 2),
      };
      results[team.number - 1].results.push(result);
      results[team.number - 1].totalPoints += result.points;
    });
  });

  return (
    <TableContainer>
      <Table stickyHeader={true} size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
            <TableCell colSpan={4} align="center">
              1試合目
            </TableCell>
            <TableCell colSpan={4} align="center">
              2試合目
            </TableCell>
            <TableCell colSpan={4} align="center">
              3試合目
            </TableCell>
            <TableCell colSpan={4} align="center">
              4試合目
            </TableCell>
            <TableCell colSpan={4} align="center">
              5試合目
            </TableCell>
            <TableCell colSpan={4} align="center">
              6試合目
            </TableCell>
            <TableCell colSpan={4} align="center">
              7試合目
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">総合順位</TableCell>
            <TableCell width={200} align="center">
              チーム
            </TableCell>
            <TableCell>合計ポイント</TableCell>
            {Array(7)
              .fill(null)
              .flatMap((_, i) => [
                <TableCell key={i + 'a'}>順位</TableCell>,
                <TableCell key={i + 'b'}>キル数</TableCell>,
                <TableCell key={i + 'c'} title={'CR選手の確定キル数'}>
                  CRキル数
                </TableCell>,
                <TableCell key={i + 'd'}>ポイント</TableCell>,
              ])}
          </TableRow>
        </TableHead>
        <TableBody>
          {results
            .sort((a, b) => b.totalPoints - a.totalPoints)
            .map((teamResult, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{teamResult.name}</TableCell>
                <TableCell>
                  <b>{teamResult.totalPoints}</b>
                </TableCell>
                {teamResult.results.flatMap((match) => [
                  <TableCell
                    key="placement"
                    title={`${calculatePlacementPoint(
                      match.placement
                    )}ポイント`}
                  >
                    {match.placement}
                  </TableCell>,
                  <TableCell key="kills">{match.kills}</TableCell>,
                  <TableCell key="cr">{match.crKills}</TableCell>,
                  <TableCell key="points">{match.points}</TableCell>,
                ])}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;

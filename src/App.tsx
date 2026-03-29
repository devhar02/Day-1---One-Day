/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Wind, 
  UserCircle, 
  Timer, 
  Wallet, 
  TrendingUp, 
  Activity, 
  Accessibility, 
  FileText, 
  Home as HomeIcon, 
  Trophy, 
  Lightbulb, 
  User, 
  PlayCircle, 
  Droplets, 
  Footprints,
  Cigarette,
  Brain,
  CheckCircle2,
  Medal,
  Lock,
  Heart,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { Tab } from './types';

// --- Components ---

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm shadow-primary/5 flex justify-between items-center px-6 h-16">
    <div className="flex items-center gap-3">
      <Wind className="text-primary w-6 h-6" />
      <h1 className="font-headline font-bold text-lg tracking-tight text-primary">5 Days Smoke-Free</h1>
    </div>
    <div className="flex items-center gap-4">
      <button className="hover:bg-primary/5 p-2 rounded-full transition-colors active:scale-95 duration-200">
        <UserCircle className="text-on-surface-variant w-6 h-6" />
      </button>
    </div>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: Tab, setActiveTab: (tab: Tab) => void }) => {
  const tabs: { id: Tab, label: string, icon: any }[] = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'milestones', label: 'Milestones', icon: Trophy },
    { id: 'tips', label: 'Tips', icon: Lightbulb },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,103,103,0.08)] rounded-t-[2rem] z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id || (activeTab === 'slip' && tab.id === 'tips');
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90 duration-200 rounded-2xl",
              isActive ? "bg-primary/5 text-primary scale-110" : "text-outline hover:text-primary"
            )}
          >
            <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
            <span className="font-body text-[11px] font-semibold tracking-wide uppercase mt-1">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

// --- Screens ---

const HomeScreen = ({ onLogCravings }: { onLogCravings: () => void }) => (
  <div className="space-y-8 pb-10">
    {/* Hero Section */}
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-container p-10 text-on-primary shadow-2xl shadow-primary/20">
      <div className="relative z-10">
        <span className="font-body text-xs uppercase tracking-[0.2em] opacity-80 mb-2 block">Current Streak</span>
        <div className="flex items-baseline gap-2">
          <h2 className="font-headline font-extrabold text-7xl tracking-tighter">5</h2>
          <span className="font-headline text-3xl font-bold opacity-90">Days</span>
        </div>
        <div className="mt-8 flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 inline-flex">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
            <Timer className="text-on-secondary-container w-6 h-6" />
          </div>
          <div>
            <p className="font-body text-[10px] uppercase opacity-70">Next Milestone</p>
            <p className="font-body font-bold">1 Week Celebration</p>
          </div>
        </div>
      </div>
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
    </section>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm group">
        <div className="flex justify-between items-start mb-6">
          <div className="bg-tertiary/10 p-3 rounded-2xl">
            <Wallet className="text-tertiary w-6 h-6" />
          </div>
          <span className="text-[10px] font-body font-bold text-tertiary bg-tertiary-fixed px-3 py-1 rounded-full uppercase">Savings</span>
        </div>
        <h3 className="font-headline text-4xl font-extrabold text-tertiary mb-1">$150</h3>
        <p className="text-on-surface-variant font-body text-sm leading-relaxed">Total money saved since your last cigarette.</p>
        <div className="mt-6 pt-6 border-t border-surface-container flex items-center justify-between">
          <span className="text-xs font-body opacity-60">Est. $30/day</span>
          <TrendingUp className="text-tertiary/40 group-hover:translate-x-1 transition-transform w-5 h-5" />
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Activity className="text-secondary w-5 h-5" />
            <h3 className="font-headline font-bold text-lg">Health Vitality</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-body">
                <span className="text-on-surface-variant uppercase">Lung Capacity</span>
                <span className="text-secondary font-bold">42%</span>
              </div>
              <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[42%] rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-body">
                <span className="text-on-surface-variant uppercase">Skin Elasticity</span>
                <span className="text-secondary font-bold">68%</span>
              </div>
              <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[68%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="relative w-full h-24 bg-surface-container-low rounded-2xl flex items-center justify-center overflow-hidden">
            <Accessibility className="text-secondary/20 w-16 h-16" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent" />
            <p className="absolute bottom-2 text-[10px] font-body text-secondary font-bold uppercase tracking-widest">Regenerating</p>
          </div>
        </div>
      </div>
    </div>

    {/* Log Cravings CTA */}
    <section 
      onClick={onLogCravings}
      className="bg-surface-container-highest rounded-[2rem] p-8 flex items-center justify-between gap-6 group hover:bg-surface-container transition-colors cursor-pointer"
    >
      <div className="flex-1">
        <h3 className="font-headline font-bold text-xl mb-2">Feeling an urge?</h3>
        <p className="text-on-surface-variant font-body text-sm">Logging your cravings helps us tailor your recovery tips.</p>
      </div>
      <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center gap-2">
        <FileText className="w-5 h-5" />
        Log Cravings
      </button>
    </section>

    {/* Daily Guidance */}
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-headline font-bold text-lg">Daily Guidance</h3>
        <button className="text-primary text-xs font-body font-bold uppercase tracking-wider">View all</button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        <div className="min-w-[280px] bg-white rounded-3xl p-6 shadow-sm">
          <img 
            className="w-full h-32 object-cover rounded-2xl mb-4" 
            src="https://picsum.photos/seed/hydration/600/400" 
            alt="Hydration"
            referrerPolicy="no-referrer"
          />
          <h4 className="font-headline font-bold text-md mb-2">Hydration is Key</h4>
          <p className="text-on-surface-variant font-body text-xs">Drinking cold water helps flush nicotine out of your system faster.</p>
        </div>
        <div className="min-w-[280px] bg-white rounded-3xl p-6 shadow-sm">
          <img 
            className="w-full h-32 object-cover rounded-2xl mb-4" 
            src="https://picsum.photos/seed/breathing/600/400" 
            alt="Breathing"
            referrerPolicy="no-referrer"
          />
          <h4 className="font-headline font-bold text-md mb-2">The 4-7-8 Rule</h4>
          <p className="text-on-surface-variant font-body text-xs">Master this breathing technique to kill a craving in under 60 seconds.</p>
        </div>
      </div>
    </section>
  </div>
);

const TipsScreen = ({ onLogSlip }: { onLogSlip: () => void }) => (
  <div className="space-y-10 pb-10">
    <section className="relative">
      <div className="flex flex-col gap-2">
        <span className="font-body text-xs uppercase tracking-[0.2em] text-secondary font-bold">Current State</span>
        <h2 className="font-headline text-4xl font-extrabold text-on-background tracking-tighter leading-tight">
          Breathe through <br/> the <span className="text-primary italic">moment.</span>
        </h2>
      </div>
      <div className="absolute -right-4 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>

    <section className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface">Log a Craving</h3>
          <p className="font-body text-sm text-on-surface-variant mt-1">Acknowledging is the first step.</p>
        </div>
        <div className="bg-secondary-container/30 p-3 rounded-2xl">
          <FileText className="text-on-secondary-container w-6 h-6" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <label className="block font-body text-[11px] font-bold uppercase tracking-widest text-outline">Select Intensity</label>
          <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-surface-container-low hover:bg-secondary-container/20 transition-all active:scale-95">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-body text-xs font-semibold">Low</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-secondary-container text-on-secondary-container transition-all active:scale-95 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-on-secondary-container" />
              <span className="font-body text-xs font-bold">Medium</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-surface-container-low hover:bg-error/10 transition-all active:scale-95">
              <div className="w-2 h-2 rounded-full bg-error" />
              <span className="font-body text-xs font-semibold">High</span>
            </button>
          </div>
        </div>
        <button 
          onClick={onLogSlip}
          className="w-full bg-primary text-on-primary py-5 rounded-full font-headline font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
        >
          Confirm Entry
        </button>
      </div>
    </section>

    <section className="space-y-6">
      <div className="flex items-end justify-between px-2">
        <h3 className="font-headline text-2xl font-bold text-on-surface">Immediate Relief</h3>
        <button className="font-body text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4">View All</button>
      </div>
      <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar -mx-6 px-6">
        <div className="min-w-[280px] snap-center bg-surface-container-lowest rounded-[2rem] p-6 flex flex-col gap-6 group hover:shadow-xl transition-shadow duration-500">
          <div className="relative h-40 rounded-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/meditation/600/400" 
              alt="Deep Breathing" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold tracking-widest uppercase">3 Mins</div>
          </div>
          <div>
            <h4 className="font-headline text-lg font-bold text-on-surface leading-tight">Deep Breathing</h4>
            <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">Inhale for 4, hold for 4, exhale for 8. Repeat until the urge passes.</p>
          </div>
          <button className="flex items-center justify-center gap-2 py-3 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-2xl text-sm transition-all active:scale-95">
            <PlayCircle className="w-5 h-5" />
            Start Session
          </button>
        </div>

        <div className="min-w-[280px] snap-center bg-surface-container-lowest rounded-[2rem] p-6 flex flex-col gap-6 group hover:shadow-xl transition-shadow duration-500">
          <div className="relative h-40 rounded-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/water/600/400" 
              alt="Drink Water" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold tracking-widest uppercase">Immediate</div>
          </div>
          <div>
            <h4 className="font-headline text-lg font-bold text-on-surface leading-tight">Drink Water</h4>
            <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">Slow sips of cold water can shock the craving cycle and hydrate your cells.</p>
          </div>
          <button className="flex items-center justify-center gap-2 py-3 bg-secondary-fixed text-on-secondary-fixed font-bold rounded-2xl text-sm transition-all active:scale-95">
            <Droplets className="w-5 h-5" />
            I'm Hydrated
          </button>
        </div>
      </div>
    </section>
  </div>
);

const SlipScreen = ({ onReset }: { onReset: () => void }) => (
  <div className="space-y-8 pb-10">
    <section className="space-y-2">
      <span className="font-body text-xs uppercase tracking-[0.2em] text-outline">Journal Entry</span>
      <h2 className="font-headline text-4xl font-extrabold text-primary leading-tight">It's okay to reset.</h2>
      <p className="text-on-surface-variant font-body text-sm max-w-[90%]">Progress isn't a straight line. Logging a slip-up is an act of honesty that keeps you moving forward, not backward.</p>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Cigarette className="text-primary w-6 h-6" />
        </div>
        <div>
          <h3 className="font-headline font-semibold text-lg">How many?</h3>
          <p className="text-sm text-on-surface-variant mb-4">Be honest with yourself.</p>
          <div className="flex items-end gap-2">
            <input className="w-20 bg-surface-container-highest border-none rounded-xl text-2xl font-bold p-3 focus:ring-2 focus:ring-primary text-center" placeholder="0" type="number" />
            <span className="text-sm font-body text-outline pb-3">cigarettes</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
          <Brain className="text-secondary w-6 h-6" />
        </div>
        <div>
          <h3 className="font-headline font-semibold text-lg">The Trigger</h3>
          <p className="text-sm text-on-surface-variant mb-3">Identify the spark.</p>
          <div className="flex flex-wrap gap-2">
            {['Stress', 'Social', 'Alcohol', 'Boredom'].map(t => (
              <button key={t} className="px-4 py-2 rounded-full bg-surface-container-high text-sm font-medium hover:bg-secondary-container transition-colors">{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="font-headline font-bold text-xl">Impact Analysis</h3>
            <p className="text-sm text-on-surface-variant">A minor setback, not a total loss.</p>
          </div>
          <div className="bg-tertiary-fixed px-4 py-1 rounded-full">
            <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Calculated Shift</span>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-semibold flex items-center gap-2">
                <Wallet className="text-tertiary w-4 h-4" /> Savings Impact
              </span>
              <span className="font-bold text-error">-$4.50</span>
            </div>
            <div className="relative h-3 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="absolute h-full w-[85%] bg-tertiary rounded-full" />
              <div className="absolute h-full w-[5%] right-[15%] bg-error/40 animate-pulse" />
            </div>
            <p className="text-xs text-outline italic">You still have $142.00 in total savings.</p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-semibold flex items-center gap-2">
                <Activity className="text-secondary w-4 h-4" /> Lung Recovery
              </span>
              <span className="font-bold text-outline">-2%</span>
            </div>
            <div className="relative h-3 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="absolute h-full w-[62%] bg-secondary rounded-full" />
              <div className="absolute h-full w-[3%] right-[38%] bg-error/30" />
            </div>
            <p className="text-xs text-outline italic">Deep breathing exercises can help reset this today.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-primary p-8 rounded-[2.5rem] text-on-primary">
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-container rounded-full opacity-50 blur-3xl"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 space-y-2">
          <h4 className="font-headline text-2xl font-bold">Ready to breathe again?</h4>
          <p className="text-on-primary-container/80 text-sm leading-relaxed">Logging this slip-up has actually strengthened your resolve. Tap below to restart your timer and continue the journey.</p>
        </div>
        <button 
          onClick={onReset}
          className="w-full md:w-auto px-10 py-4 bg-surface-container-lowest text-primary font-bold rounded-full shadow-lg active:scale-95 transition-all"
        >
          Restart My Streak
        </button>
      </div>
    </section>
  </div>
);

const MilestonesScreen = () => (
  <div className="space-y-10 pb-10">
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary shadow-xl">
      <div className="relative z-10">
        <span className="font-body text-xs uppercase tracking-[0.2em] opacity-80 mb-2 block">Current Milestone</span>
        <h2 className="font-headline font-extrabold text-4xl mb-4 leading-tight">You're breathing <br/>cleaner air.</h2>
        <p className="font-body text-lg opacity-90 max-w-[240px] mb-6">5 days of resilience. Every breath is a victory.</p>
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
          <Sparkles className="w-4 h-4 fill-current" />
          <span className="font-body text-sm font-bold">120 hours free</span>
        </div>
      </div>
      <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>

    <section className="space-y-6">
      <div className="flex justify-between items-end">
        <h3 className="font-headline font-bold text-2xl text-primary">Your Badges</h3>
        <span className="font-body text-xs text-outline uppercase tracking-widest">3 Earned</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col items-center text-center group">
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4 relative">
            <CheckCircle2 className="text-secondary w-10 h-10 fill-current" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/20 animate-spin-slow" />
          </div>
          <span className="font-headline font-bold text-on-surface mb-1">24 Hours Clean</span>
          <p className="font-body text-sm text-outline mb-4">The first sunrise of your new life.</p>
          <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
            <div className="bg-secondary h-full w-full" />
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-tertiary/10 flex items-center justify-center mb-4">
            <Medal className="text-tertiary w-10 h-10 fill-current" />
          </div>
          <span className="font-headline font-bold text-on-surface mb-1">3 Days Strong</span>
          <p className="font-body text-sm text-outline mb-4">Withdrawal is peaking, and so are you.</p>
          <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
            <div className="bg-tertiary h-full w-full" />
          </div>
        </div>

        <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 border border-outline-variant/10">
          <div className="w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 relative">
            <Lock className="text-outline/40 w-10 h-10" />
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle className="text-primary/10" cx="48" cy="48" fill="transparent" r="44" stroke="currentColor" strokeWidth="4" />
              <circle className="text-primary" cx="48" cy="48" fill="transparent" r="44" stroke="currentColor" strokeDasharray="276" strokeDashoffset="80" strokeWidth="4" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="font-headline font-bold text-xl">1 Week Goal</h4>
              <span className="font-body font-bold text-primary">72% Complete</span>
            </div>
            <p className="font-body text-outline mb-6">Almost there! Your carbon monoxide levels are now that of a non-smoker.</p>
            <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[72%] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <h3 className="font-headline font-bold text-2xl text-primary">Unlocked Rewards</h3>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-2xl flex items-start gap-4 shadow-sm">
          <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h5 className="font-headline font-semibold text-on-surface">Respiratory Recovery</h5>
            <p className="font-body text-sm text-outline mt-1">Bronchial tubes have started to relax. Your breathing is becoming noticeably easier today.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl flex items-start gap-4 shadow-sm">
          <div className="p-3 bg-tertiary/10 rounded-xl text-tertiary">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <h5 className="font-headline font-semibold text-on-surface">Circulatory Boost</h5>
            <p className="font-body text-sm text-outline mt-1">Your blood pressure and pulse rate have dropped to a much healthier level since day 1.</p>
          </div>
        </div>
        <div className="relative h-40 rounded-2xl overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/clarity/800/400" 
            alt="Mental Clarity" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent p-6 flex flex-col justify-end">
            <h5 className="text-white font-headline font-bold">Mental Clarity</h5>
            <p className="text-white/80 text-xs font-body">Focus levels increasing as nicotine leaves the system.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <h3 className="font-headline font-bold text-2xl text-primary">Upcoming Health Benefits</h3>
      <div className="space-y-4">
        {[
          {
            time: "2 Weeks",
            title: "Circulation & Lung Function",
            desc: "Your circulation improves and your lung function increases. Walking becomes easier.",
            icon: Footprints,
            color: "text-secondary",
            bgColor: "bg-secondary/10"
          },
          {
            time: "1 Month",
            title: "Cilia Regrowth",
            desc: "Cilia in your lungs start to regrow, increasing their ability to handle mucus and clean the lungs.",
            icon: Activity,
            color: "text-primary",
            bgColor: "bg-primary/10"
          },
          {
            time: "6 Months",
            title: "Lung Capacity",
            desc: "Coughing, sinus congestion, and shortness of breath decrease significantly.",
            icon: Wind,
            color: "text-tertiary",
            bgColor: "bg-tertiary/10"
          },
          {
            time: "1 Year",
            title: "Heart Health",
            desc: "Your risk of coronary heart disease is now half that of a smoker.",
            icon: Heart,
            color: "text-error",
            bgColor: "bg-error/10"
          }
        ].map((benefit, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-3xl flex items-start gap-5 shadow-sm border border-outline-variant/5 hover:border-primary/20 transition-colors group">
            <div className={cn("p-4 rounded-2xl shrink-0 transition-transform group-hover:scale-110", benefit.bgColor, benefit.color)}>
              <benefit.icon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline">{benefit.time}</span>
                <div className="h-px flex-1 bg-outline-variant/20" />
              </div>
              <h5 className="font-headline font-bold text-on-surface">{benefit.title}</h5>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <div className="bg-surface-container-highest p-8 rounded-[2rem] text-center space-y-2 border border-white">
      <span className="font-body text-[10px] uppercase tracking-widest text-outline">Total Financial Gain</span>
      <div className="text-5xl font-headline font-extrabold text-tertiary drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
        $45.50
      </div>
      <p className="font-body text-sm text-on-surface-variant italic">Enough for a premium wellness dinner.</p>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen oxygen-glow">
      <Header />
      
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-32">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <HomeScreen onLogCravings={() => setActiveTab('tips')} />
            </motion.div>
          )}
          {activeTab === 'tips' && (
            <motion.div
              key="tips"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <TipsScreen onLogSlip={() => setActiveTab('slip')} />
            </motion.div>
          )}
          {activeTab === 'slip' && (
            <motion.div
              key="slip"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <SlipScreen onReset={() => setActiveTab('home')} />
            </motion.div>
          )}
          {activeTab === 'milestones' && (
            <motion.div
              key="milestones"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <MilestonesScreen />
            </motion.div>
          )}
          {activeTab === 'profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center space-y-4"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <h2 className="font-headline text-2xl font-bold">Your Profile</h2>
              <p className="text-on-surface-variant">Profile settings and preferences coming soon.</p>
              <button 
                onClick={() => setActiveTab('home')}
                className="text-primary font-bold flex items-center gap-2"
              >
                Back to Dashboard <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Signature Oxygen Element */}
      <div className="fixed -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}
